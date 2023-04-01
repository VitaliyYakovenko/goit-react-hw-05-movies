import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getCastsMovie } from "API/themoviedbAPI";
import css from "./Cast.module.css";

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
 
    useEffect(() => {    
    getCastsMovie(movieId)
    .then(resp => setCast(resp.cast))    
    }, [movieId])
    
 
    if (cast.length === 0) {
    return  <p className={css.noInfomCast}>No information</p>  
    }
  
    if (cast.length !== 0) {
        return (
        <ul className={css.cast}>
            {cast.map(c => (
            <li className={css.cast__item} key={c.cast_id}>
            <img className={css.cast__photo} src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${c.profile_path}`}    
                        alt="actor_photo"
                        width="110"
                        height="80"
            />
            <p>{c.original_name}</p>
            <p>Character : {c.character}</p>
            </li>
            ))}
            </ul>
        )
    }
  
   
}

//   margin-left: 40px;
    // font-size: 28px;
    // margin-bottom: 20px;