import { useEffect, useState} from "react"
import { Link, useSearchParams, useLocation  } from "react-router-dom";
import { searchMovieByName } from "API/themoviedbAPI"
import css from "./Movies.module.css";


export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();    
    const queryName = searchParams.get("query") ?? "";
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState("idle");
    const [moviesName, setMovieName] = useState("");

  
     
    const onChangeMovieName = (e) => {
        const { value } = e.target;
        setMovieName(value);
    }
    
    const onSearhMovie = (e) => {
        if (moviesName === "") {
          return setSearchParams({})
        }
        setSearchParams({query: moviesName})
    }
    


    useEffect(() => {
        if (!queryName) {
            return;
        }
        if (queryName) {
        searchMovieByName(queryName)
        .then(res => {
        setMovies(res.results);
        setStatus("resolved")
        })
        .finally(() => {
        setMovieName("");
        });    
        }
    },[queryName]) 
  
    
    if (status === "idle") {
    return (
               <div className={css.container}>
               <input className={css.input} onChange={onChangeMovieName} type="text" value={moviesName}></input>
                 <button className={css.searchBtn} onClick={onSearhMovie}>Search</button>
                   <p className={css.searchInfrom}>Enter movie name</p>
              </div>     
           );      
     }
   

  
    return (
    <div className={css.container}>
      <input className={css.input} onChange={onChangeMovieName} type="text" value={moviesName}></input>
      <button className={css.searchBtn}  onClick={onSearhMovie}>Search</button>
            <div>
           {movies.length === 0
            ? <p className={css.searchInfrom}>Nothing found</p>
            : <ul className={css.movies}>{movies.map(movie => (
                <li className={css.movies__item} key={movie.id}>
                <Link to={`${movie.id}`} state={{from: location}} >{movie.title || movie.name}</Link>
                </li>
              ))}
             </ul>
            }
            </div>   
    </div>
        )
    }
