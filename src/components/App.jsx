import { Link, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Movies from "pages/Movies";

export default function App() {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link to="/">Home</Link>            
          </li>
          <li>
           <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </header>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies/>} />
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
      </div>
      </>
  );
}