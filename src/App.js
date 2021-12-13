import logo from './ng.svg';
//import logo from './ng.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi there! Demo <code>react.js</code> application!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          This was built for a Docker and K8S learning project.
        </p>
        <p>
          Soon to be hosted on AWS!
        </p>
       
      </header>
    </div>
  );
}

export default App;
