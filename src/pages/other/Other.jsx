import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../App.css";
function Other() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // دریافت نظرات
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        setComments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("خطایی رخ داد");
        setLoading(false);
      });
  }, []);

  // تابع برای به‌روزرسانی کامل نظر (PUT)
  const updateCommentPut = async (commentId) => {
    try {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/comments/${commentId}`,
        {
          name: "نام جدید",
          email: "new.email@example.com",
          body: "متن نظر به‌روزرسانی‌شده",
          postId: 1,
        }
      );
      // به‌روزرسانی state با داده جدید
      setComments(comments.map((comment) => (comment.id === commentId ? response.data : comment)));
      console.log("نتیجه PUT:", response.data);
    } catch (error) {
      setError("خطا در به‌روزرسانی نظر");
    }
  };

  // تابع برای به‌روزرسانی جزئی نظر (PATCH)
  const updateCommentPatch = async (commentId) => {
    try {
      const response = await axios.patch(
        `https://jsonplaceholder.typicode.com/comments/${commentId}`,
        {
          body: "فقط متن نظر به‌روزرسانی شد", // فقط یک فیلد
        }
      );
      setComments(comments.map((comment) => (comment.id === commentId ? response.data : comment)));
      console.log("نتیجه PATCH:", response.data);
    } catch (error) {
      setError("خطا در به‌روزرسانی جزئی نظر");
    }
  };

  // تابع برای حذف نظر (DELETE)
  const deleteComment = async (commentId) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/comments/${commentId}`);
      // حذف نظر از state
      setComments(comments.filter((comment) => comment.id !== commentId));
      console.log("نظر حذف شد:", commentId);
    } catch (error) {
      setError("خطا در حذف نظر");
    }
  };

  if (loading) return <p>در حال بارگذاری...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>نظرات پست ۱</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
            <button onClick={() => updateCommentPut(comment.id)}>به‌روزرسانی کامل (PUT)</button>
            <button onClick={() => updateCommentPatch(comment.id)}>به‌روزرسانی جزئی (PATCH)</button>
            <button onClick={() => deleteComment(comment.id)}>حذف (DELETE)</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Other;
