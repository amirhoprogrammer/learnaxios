import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // درخواست GET به API
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data); // داده‌ها رو ذخیره کن
        setLoading(false); // لودینگ رو غیرفعال کن
      })
      .catch((error) => {
        setError("خطایی رخ داد!"); // مدیریت خطا
        setLoading(false);
      });
  }, []); // آرایه خالی یعنی فقط موقع لود کامپوننت اجرا بشه

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>پست‌ها</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostList;
