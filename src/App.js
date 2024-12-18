// import logo from './logo.svg';
// import logo1 from './logo1.png';
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Compones/Footer/Footer";
import Navbar from "./Compones/Header/Navbar";
import ScrollToTop from "./Compones/ScrollToTop";

// import Hero from "./Compones/Hero/Hero";



function App() {


  return (
    <div className="App" >
      <ScrollToTop/>
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

      <Navbar />
      <Outlet/>
      <Footer/>
      

    </div>
  );
}

export default App;
