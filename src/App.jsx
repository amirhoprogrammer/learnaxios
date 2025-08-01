import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PostList from "./pages/PostList";
import Home from "./pages/Home";
import Post1 from "./pages/Post1";
import Post1Comment from "./pages/Post1Comment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/postlist" element={<PostList />} />
      <Route path="/post1" element={<Post1 />} />
      <Route path="/post1comment" element={<Post1Comment />} />
    </Routes>
  );
}

export default App;
