import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";
import FooterCard from "./components/Footer/FooterCard";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <FooterCard />
    </div>
  );
}

export default App;
