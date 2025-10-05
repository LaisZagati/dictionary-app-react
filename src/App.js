import dic from "./dic.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={dic} className="App-logo img-fluid" alt="search" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Lais Zagati</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
