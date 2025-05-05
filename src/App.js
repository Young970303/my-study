import './App.css';

function App() {
  const name = undefined;
  return (
    <>
      <h1>리액트 안녕!</h1>
      <h2>잘 작동하니?</h2>
      <div>{name || '리액트'}</div>
    </>
  );
}

export default App;
