import { useEffect, useState} from "react"
import { Link, useSearchParams, useLocation  } from "react-router-dom";
import { searchMovieByName } from "API/themoviedbAPI"

export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();    
    const queryName = searchParams.get("query") ?? "";
    const location = useLocation();
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState("idle");
    const [moviesName, setMovieName] = useState("");

    useEffect(() => {
        movies && setStatus("resolved")
    },[movies])
     
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
    },[queryName, setMovies]) 
  
   
    

      if (status === "idle") {
          return (
              <>
              <input onChange={onChangeMovieName} type="text" value={moviesName}></input>
                <button onClick={onSearhMovie}>Search</button>
                  <p>Enter movie name</p>
             </>     
          );
          
    }
    
    if (status === "resolved") {
        return (
            <>
            <input onChange={onChangeMovieName} type="text" value={moviesName}></input>
            <button onClick={onSearhMovie}>Search</button>
            {movies.length === 0
            ? <p>Nothing found</p>
            : <div>{movies.map(movie => (
                <li key={movie.id}>
                <Link to={`${movie.id}`} state={{from: location}} >{movie.title || movie.name}</Link>
                </li>
                ))}</div>
            }
            </>
        )
    }
 }     

