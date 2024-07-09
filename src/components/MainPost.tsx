import React, { useState } from "react";
import SubmitPost from "./SubmitPost";
import Post from "./Post";
import usePost from "../services/usePost";
import useCreatePost from "../services/useCreatePost";
import useDeletePost from "../services/useDeletePost";
import { IPost } from "../types/Post";

const MainPost: React.FC<{
  handleViewPost: (id: string) => void;
}> = ({ handleViewPost }) => {
  const { data: posts, isLoading: isGetPosts } = usePost();
  const { mutate: addPost, isPending: isCreating } = useCreatePost();
  const { mutate: deletePost, isPending: isDeletingPost } = useDeletePost();

  const [postUpdate, setPostUpdate] = useState({
    id: "",
  });

  const isLoading = isCreating || isGetPosts || isDeletingPost;
  const handleDelete = (id: string) => deletePost(id);
  const handleUpdate = (id: string) => setPostUpdate({ id });
  const handleData = (data: IPost | Record<string, FormDataEntryValue>) => {
    if (data.id) {
      setPostUpdate({ id: "" });
      return;
    }
    addPost(data as IPost);
  };

  const Posts = (
    <div className="grid grid-cols-4 gap-x-4 gap-y-4">
      {posts?.map((post) => (
        <Post
          key={post.id}
          handleUpdate={handleUpdate}
          handleViewPost={handleViewPost}
          handleDelete={handleDelete}
          post={post}
        />
      ))}
    </div>
  );
  return (
    <main className="flex">
      <aside className="  w-1/4 h-[88vh] border-r ">
        <div className="w-10/12 mx-auto">
          <SubmitPost handleData={handleData} id={postUpdate.id} />
        </div>
      </aside>

      <section className="flex px-4 pt-10 flex-col gap-y-4 w-full  h-full  ">
        <h2 className="text-xl font-bold">Postagens</h2>
        {isLoading ? "Carregando..." : Posts}
      </section>
    </main>
  );
};

export default MainPost;
