import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getMovieReviews } from "API/themoviedbAPI"



export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieReviews(movieId)
        .then(resp => setReviews(resp.results))
    },[movieId])
   

    if (reviews.length === 0) {
        return(<p>We dont have any reviews for this movie.</p>) 
    }
    if (reviews.length !== 0) {
        return (
            <ul>
                {reviews.map(review => (
                    <li key={review.id}>
                        <p>{review.author_details.username}</p>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>   
        

       ) 
    }
}