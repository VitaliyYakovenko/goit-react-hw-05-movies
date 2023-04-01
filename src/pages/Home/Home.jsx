import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";
import {trendingMovies}  from "API/themoviedbAPI"
import css from './Home.module.css';

export default function Home() {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
  
    useEffect(() => {
        trendingMovies()
        .then(res => setMovies(res.results))     
    }, []) 

    return (
        <div className={css.container}>
        <h1 className={css.title} >Tranding today</h1>
        <ul className={css.movies}>
        {movies.map(movie => (
        <li className={css.movies__item} key={movie.id}>
        <Link to={`movies/${movie.id}`} state={{from: location}}>
        <span>{movie.title || movie.name}</span>
        </Link>
        </li>
        ))}
        </ul>
        </div>
        )  
}
