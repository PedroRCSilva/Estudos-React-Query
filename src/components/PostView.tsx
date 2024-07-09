import React from "react";
import Button from "./Button";
import { IPostView } from "../types/Post";
import { usePostId } from "../services/usePostId";

const PostView: React.FC<IPostView> = ({ backPost, id }) => {
  const { data, isLoading } = usePostId(id);
  if (isLoading) return <div>Carregando...</div>;
  if (!data)
    return (
      <div>
        <h2>Post não encontrado</h2>
        <Button className="w-max px-4" onClick={() => backPost()}>
          Voltar
        </Button>
      </div>
    );

  return (
    <div className="px-4 py-5 ">
      <Button
        className="w-max px-4 mb-4"
        onClick={() => {
          backPost();
        }}
      >
        Voltar
      </Button>
      <div className="mb-4">
        <h2 className="text-xl mb-2 font-bold">{data.titulo}</h2>
        <h3 className="text-sm">{data.autor}</h3>
      </div>
      <p>{data.descricao}</p>
    </div>
  );
};

export default PostView;
