import React, { useState, useEffect } from "react";
import axios from "axios";
function Post1() {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // درخواست GET به API
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setPost(response.data); // داده‌ها رو ذخیره کن
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
    <div className="post1">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
export default Post1;
