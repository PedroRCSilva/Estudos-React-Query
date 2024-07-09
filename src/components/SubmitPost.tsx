import { IPost } from "../types/Post";
import { flatterForm } from "../utils/flatterForm";
import Button from "./Button";

const SubmitPost: React.FC<{
  id: string;
  handleData: (data: Record<string, FormDataEntryValue> | IPost) => void;
}> = ({ id, handleData }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = flatterForm(e.currentTarget);
    if (id)
      Object.defineProperty(data, "id", {
        value: id,
        writable: true,
      });
    handleData(data as unknown as IPost);
    e.currentTarget.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-y-4 py-4">
      <div className="flex flex-col gap-y-4">
        <label htmlFor="titulo">Titulo da postagem</label>
        <input
          type="text"
          name="titulo"
          className="border-2 border-gray-500 rounded-md p-2"
        />
      </div>

      <div className="flex flex-col gap-y-4">
        <label htmlFor="descricao">Descrição da postagem</label>
        <textarea
          name="descricao"
          className="border-2 border-gray-500 rounded-md p-2 h-40 resize-none"
        />
      </div>
      <div className="flex flex-col gap-y-4">
        <label htmlFor="autor">Autor da postagem</label>
        <input
          name="autor"
          type="text"
          className="border-2 border-gray-500 rounded-md p-2"
        />
      </div>
      <Button>Enviar</Button>
    </form>
  );
};

export default SubmitPost;
