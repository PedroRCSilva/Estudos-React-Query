import React from "react";
import Button from "./Button";
import { IPostView } from "../types/Post";

const PostView: React.FC<IPostView> = ({ backPost }) => {
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
        <h2 className="text-xl mb-2 font-bold">O que você pensa da vida?</h2>
        <h3 className="text-sm">Pedro Rocha</h3>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
        necessitatibus recusandae nobis incidunt in corporis sunt consectetur.
        Iste harum sunt veniam! Quas aut, voluptatum expedita nesciunt soluta
        illum odit doloremque! Rerum omnis voluptatibus harum ratione beatae
        ullam tenetur, deserunt aperiam nam reiciendis culpa. Expedita sint,
        voluptate id voluptas excepturi, saepe neque tempore est impedit sit
        assumenda illo. Commodi, hic veritatis. Sapiente obcaecati quam nesciunt
        exercitationem, doloremque dicta est totam quo asperiores in vel, nisi
        modi, eius cupiditate sunt. Molestiae dignissimos harum beatae! Aut
        natus consequatur, assumenda labore dignissimos minus consequuntur.
      </p>
    </div>
  );
};

export default PostView;
