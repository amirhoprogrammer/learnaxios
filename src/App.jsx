import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import Home from "./pages/Home";
import Post1 from "./pages/Post1";
import Post1Comment from "./pages/Post1Comment";
import CommentPostId1 from "./pages/CommentPostId1";
import PostsPost from "./pages/Post/PostsPost";
import Other from "./pages/other/Other";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/postlist" element={<PostList />} />
      <Route path="/post1" element={<Post1 />} />
      <Route path="/post1comment" element={<Post1Comment />} />
      <Route path="/commentpostid1" element={<CommentPostId1 />} />
      <Route path="/postspost" element={<PostsPost />} />
      <Route path="/other" element={<Other />} />
    </Routes>
  );
}

export default App;
