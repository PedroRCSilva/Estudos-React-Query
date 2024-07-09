import { useQuery } from "@tanstack/react-query";
import { IPost } from "../types/Post";

const baseUrl = import.meta.env.VITE_API_URL as string;
const getPosts = async () => {
  const response = await fetch(baseUrl + "/post");
  return response.json();
};

const usePost = () => {
  return useQuery<IPost[]>({
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: 1000 * 60 * 5,
  });
};

export default usePost;
