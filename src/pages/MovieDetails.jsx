import { useEffect,useState, useRef } from "react";
import { useParams ,Outlet, Link, useLocation} from "react-router-dom"
import { getSpecificMovie } from "API/themoviedbAPI";
import Genres from "components/Genres";

export default function MovieDetails() {
    const [movie, setMovie] = useState("");
    const { movieId } = useParams();
    const locationDetails = useLocation();
    const locationRef = useRef(locationDetails.state?.from ?? "/movies");

    useEffect(() => {
        getSpecificMovie(movieId)
        .then((res)=> setMovie(res))
    }, [movieId])
   
    if (movie.status_code === 34) {
        return(<p>At the moment there is no way to show information about the movie</p>)
    }
    else 
    return (
        <>
        <div><Link to={locationRef.current}>Go back</Link> </div>    
        <div>        
        <h2>{movie.title}</h2>
        <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`} alt="poster" width='300' />   
        <p>Release date: {movie.release_date}</p>    
        <p>User score: {movie.popularity}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>    
        <ul>        
        <Genres genres={movie.genres || []} />
        </ul>    
        </div>
        <h3>Additional Information</h3>    
        <div>
        <Link to="cast">
           <button>Cast</button>
        </Link>
        </div>
        <div>    
        <Link to="reviews">
           <button>Reviews</button>
        </Link>
        </div>
        <Outlet/>
        </>
   )
}

