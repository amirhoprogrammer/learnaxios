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
          <a href="/postlist">go to lesson2</a>
        </div>
      </div>
    </div>
  );
}
export default Home;
