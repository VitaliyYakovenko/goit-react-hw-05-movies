import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";
import {trendingMovies}  from "API/themoviedbAPI"


export default function Home() {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
  
    useEffect(() => {
        trendingMovies()
        .then(res => setMovies(res.results))     
    }, []) 

    return (
        <>
        <h1>Tranding today</h1>
        <ul>
        {movies.map(movie => (
        <li key={movie.id}>
        <Link to={`movies/${movie.id}`} state={{from: location}}>
        <span>{movie.title || movie.name}</span>
        </Link>
        </li>
        ))}
        </ul>
        </>
        )  
}
