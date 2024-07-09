import { useQuery } from "@tanstack/react-query";
import { IPost } from "../types/Post";

const baseUrl = import.meta.env.VITE_API_URL as string;

const getPostId = async (id: string) =>
  await fetch(`${baseUrl}/post/${id}`).then((res) => res.json());

export const usePostId = (id: string) => {
  return useQuery<IPost>({
    queryKey: ["post", id],
    queryFn: () => getPostId(id),
    staleTime: 1000 * 60 * 5,
  });
};