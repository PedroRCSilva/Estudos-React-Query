import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IPost } from "../types/Post";


const baseUrl = import.meta.env.VITE_API_URL as string;
const addPost = async (data: IPost) => {
  const response = await fetch(baseUrl + "/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const useCreatePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addPost,
    onSuccess: (result) => {
      queryClient.setQueryData<IPost[]>(
        ["posts"],
        (old: IPost[] | undefined) => {
          return [...(old || []), result];
        }
      );
    },
  });
};

export default useCreatePost;
