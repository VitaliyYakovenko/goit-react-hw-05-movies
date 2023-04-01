import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Loayout/Layout";

const Home = lazy(() => import("pages/Home/Home"));
const Movies = lazy(() => import("pages/Movies/Movies"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));
const Reviews = lazy(() => import("components/Reviews/Reviews"));
const Cast = lazy(() => import("components/Cast/Cast"));

export default function App() {
  return (
  <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails/>}>
          <Route path="cast" element={<Cast/>} />
          <Route path="reviews" element={<Reviews/>} /> 
        </Route>
      </Route>
  </Routes>
  );
}


