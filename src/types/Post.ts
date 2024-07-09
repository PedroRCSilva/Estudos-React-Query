export interface IPost {
  id?: string;
  titulo: string;
  descricao: string;
  autor: string;
}

export interface IPostView {
  id: string;
  backPost: () => void;
}
