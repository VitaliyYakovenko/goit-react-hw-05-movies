export default function Genres({ genres }) {
 
    console.log(genres);
    if (genres.length === 0) {
        return (<p>Genres not found</p>)
    
    }
  
    if (genres.length !== 0) {
    return (
    <>
    <h3>Genres</h3>
    {genres.map(genr => (
    <li key={genr.id}>
    <span>{genr.name}</span>
    </li>
    ))}
    </>)
    }

}