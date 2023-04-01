import { useEffect,useState, useRef, Suspense } from "react";
import { useParams ,Outlet, Link , useLocation} from "react-router-dom"
import { getSpecificMovie } from "API/themoviedbAPI";
import Genres from "components/Genres/Genres";
import Loader from "components/Loader/Loader";
import css from "./MovieDetails.module.css";

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
        <div className={css.btnGoBack}><Link to={locationRef.current}> Go back</Link> </div>    
        <div className={css.container}>
        <div className={css.movie}>       
        <img className={css.movie__poster} src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`} alt="poster" />
        <div className={css.movie__inform}>           
        <h2 className={css.movie__name}>{movie.title}</h2>            
        <p className={css.movie__date}>Release date: {movie.release_date}</p>    
        <p className={css.movie__score}>User score: {movie.popularity}</p>
        <h3 className={css.movie__overvie}>Overview</h3>
        <p className={css.movie__overvieText}>{movie.overview}</p>            
        <ul>        
        <Genres  genres={movie.genres || []} />                    
        </ul> 
        </div>                
        </div>        
        </div>
        <div className={css.informBox}>    
        <h3 className={css.additionalInformation}>Additional Information</h3>    
        <div>
        <Link className={css.detailsBtn} to="cast">
           <button>Cast</button>
        </Link>
        </div>
        <div>    
        <Link className={css.detailsBtn} to="reviews">
           <button>Reviews</button>
        </Link>
        </div>
        <Suspense fallback={<Loader/>}>
        <Outlet />
        </Suspense>
        </div>        
        </>
   )
}

