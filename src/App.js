import logo from './logo.svg';
import './App.css';
import * as Sparql from './Sparql';
import ContentPanel from './ContentPanel';

function App() {
  Sparql.getCountries();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
