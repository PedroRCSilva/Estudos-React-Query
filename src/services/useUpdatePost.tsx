import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IPost } from "../types/Post";

const baseUrl = import.meta.env.VITE_API_URL as string;

const updatePost = async (id: string, post: IPost) => {
  const response = await fetch(`${baseUrl}/post/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return response.json();
};
export const useUpdatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { id: string; post: IPost }) =>
      updatePost(data.id, data.post),
    onSuccess: (data, variables) => {
      console.log(data, variables);
      queryClient.setQueryData(["post", variables.id], data);
      queryClient.setQueryData<IPost[]>(["posts"], (old: IPost[] | undefined) =>
        old?.map((post) =>
          post.id === variables.id ? { ...post, ...data } : post
        )
      );
    },
  });
};
