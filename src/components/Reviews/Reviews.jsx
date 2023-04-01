import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getMovieReviews } from "API/themoviedbAPI"
import css from "./Reviews.module.css";


export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieReviews(movieId)
        .then(resp => setReviews(resp.results))
    },[movieId])
   

    if (reviews.length === 0) {
        return(<p className={css.reviewsNotFoundInform}>We dont have any reviews for this movie.</p>) 
    }
    if (reviews.length !== 0) {
        return (
            <ul className={css.reviews}>
                {reviews.map(review => (
                    <li className={css.reviews__item} key={review.id}>
                        <p className={css.reviews__autor}>{review.author_details.username}</p>
                        <p>{review.content}</p>
                    </li>
                ))}
            </ul>   
        

       ) 
    }
}