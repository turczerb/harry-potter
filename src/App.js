import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar/NavBar";
import FooterCard from "./components/Footer/FooterCard";
import BookCard from "./components/Books/BookCard";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/books" exact element={<BookCard />} />
      </Routes>
      <FooterCard />
    </div>
  );
}

export default App;
