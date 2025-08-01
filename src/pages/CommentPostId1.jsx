import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
function CommentPostId1() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((response) => {
        setPosts(response.data);
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
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.name}</h3>
            <h5>{post.email}</h5>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CommentPostId1;
