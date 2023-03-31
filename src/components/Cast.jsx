import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getCastsMovie } from "API/themoviedbAPI";

export default function Cast() {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
 
    useEffect(() => {    
    getCastsMovie(movieId)
    .then(resp => setCast(resp.cast))    
    }, [movieId])
    
 
    if (cast.length === 0) {
    return  <p>No information</p>  
    }
  
    if (cast.length !== 0) {
        return (
        <ul>
            {cast.map(c => (
            <li key={c.cast_id}>
            <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${c.profile_path}`}    
            alt="actor_photo"
            width="100"
            height="60"/>
            <p>{c.original_name}</p>
            <p>Character : {c.character}</p>
            </li>
            ))}
            </ul>
        )
    }
  
   
}

