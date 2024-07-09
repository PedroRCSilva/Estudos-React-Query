import { IPost } from "../types/Post";
import Button from "./Button";

const Post: React.FC<{
  post: IPost;
  handleDelete: (id: string) => void;
  handleViewPost: (id: string) => void;
  handleUpdate: (id: string) => void;
}> = ({ post, handleViewPost, handleUpdate, handleDelete }) => {
  return (
    <div className="flex flex-col gap-y-2 border px-4 py-4 min-w-64">
      <div className="flex gap-x-4 justify-between ">
        <div>
          <h2 className="font-semibold text-xl mb-2">{post.titulo}</h2>
          <h3 className="font-medium">{post.autor}</h3>
        </div>
        <div className="flex gap-x-2">
          <span className="cursor-pointer">
            <img
              src="/images/delete-icon.png"
              className="w-5"
              onClick={() => handleDelete(post.id || "")}
            />
          </span>
          <span className="cursor-pointer">
            <img
              src="/images/update-icon.png"
              className="w-5"
              onClick={() => handleUpdate(post.id || "")}
            />
          </span>
        </div>
      </div>
      <Button onClick={() => handleViewPost(post.id || "")}>
        Ver postagem
      </Button>
    </div>
  );
};

export default Post;
