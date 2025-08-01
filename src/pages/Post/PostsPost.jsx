import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
function PostsPost() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("خطایی رخ داد");
        setLoading(false);
      });
  }, []);
  const addPost = async () => {
    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        title: "پست جدید",
        body: "این یه پست تستی است!",
        userId: 1,
      });
      console.log("پست اضافه شد:", response.data);
    } catch (error) {
      console.error("خطا:", error);
    }
  };
  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>{posts.title}</h1>
      <p>{posts.body}</p>
      <button onClick={addPost}>Create Post</button>
    </div>
  );
}
export default PostsPost;
