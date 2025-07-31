import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import PostList from "./PostList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostList />} />
    </Routes>
  );
}

export default App;
