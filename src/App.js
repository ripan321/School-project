// import logo from './logo.svg';
// import logo1 from './logo1.png';
import './App.css';
import Navbar from './Compones/Header/Navbar';
import Hero from './Compones/Hero/Hero';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo1} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <Navbar/>
      <Hero/>



    </div>
  );
}

export default App;
