import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Contact from './Contact_Us';
import About from './About';


function App() {
  return (
    <>
      <Home /> 
      <About />
      <Contact />
    </>
  );
}

export default App;
