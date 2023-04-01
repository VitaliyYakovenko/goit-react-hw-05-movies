import PropTypes from 'prop-types'
import css from "./Genres.module.css";

export default function Genres({ genres }) {

    if (genres.length === 0) {
        return (<p>Genres not found</p>)
    
    }
  
    if (genres.length !== 0) {
    return (
    <>
    <h3 className={css.genres}>Genres</h3>
    {genres.map(genr => (
    <li className={css.genres__item} key={genr.id}>
    <span>{genr.name}</span>
    </li>
    ))}
    </>)
    }

}


Genres.propTypes = {
    genres: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name:PropTypes.string.isRequired, 
         })
    )
}