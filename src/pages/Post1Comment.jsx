import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
function Post1Comment() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        setPosts(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("خطایی رخ داد");
        setLoading(false);
      });
  }, []);
  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <h1>post1</h1>
      <ul>
        {posts.map((post) => {
          <li key={post.id}>
            <h3>{post.name}</h3>
            <p>{post.email}</p>
            <p>{post.body}</p>
          </li>;
        })}
      </ul>
    </div>
  );
}
export default Post1Comment;
