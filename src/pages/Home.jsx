import "../App.css";
function Home() {
  return (
    <div>
      <h1>axios lessons</h1>
      <div className="box">
        <div className="card">
          <p>lesson1</p>
          <a href="/postlist">go to lesson1</a>
        </div>
        <div className="card">
          <p>lesson2</p>
          <a href="/post1">go to lesson2</a>
        </div>
        <div className="card">
          <p>lesson3</p>
          <a href="/post1comment">go to lesson3</a>
        </div>
        <div className="card">
          <p>lesson4</p>
          <a href="/commentpostid1">go to lesson4</a>
        </div>
        <div className="card">
          <p>lesson5</p>
          <a href="/postspost">go to lesson5</a>
        </div>
        <div className="card">
          <p>lesson6</p>
          <a href="/other">go to lesson6</a>
        </div>
      </div>
    </div>
  );
}
export default Home;
