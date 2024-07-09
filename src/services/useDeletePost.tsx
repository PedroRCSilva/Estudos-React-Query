import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IPost } from "../types/Post";

const baseUrl = import.meta.env.VITE_API_URL as string;
const deletePost = async (id: string) => {
  const response = await fetch(baseUrl + "/post/" + id, {
    method: "DELETE",
  });
  return response.json();
};

const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: (_result, variables) =>
      queryClient.setQueryData<IPost[]>(["posts"], (old: IPost[] | undefined) =>
        old ? old.filter((post: IPost) => post.id !== variables) : []
      ),
  });
};

export default useDeletePost;
