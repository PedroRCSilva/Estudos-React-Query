import { useState } from "react";
import "./App.css";
import PostView from "./components/PostView";

import MainPost from "./components/MainPost";

function App() {
  const [postView, setPostView] = useState({
    show: false,
    id: "",
  });

  const handleViewPost = (id: string) => setPostView({ show: true, id });
  const handleBackPost = () => setPostView({ show: false, id: "" });

  return (
    <>
      <header className="w-full py-10 flex justify-center items-center text-xl font-medium border-b-2">
        Blog do pedro
      </header>
      {postView.show ? (
        <PostView backPost={handleBackPost} id={postView.id} />
      ) : (
        <MainPost handleViewPost={handleViewPost} />
      )}
    </>
  );
}

export default App;
