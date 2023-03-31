const KEY = `5c9fbebd8a4183e94064202846ae6076`;
const BASE_URL = `https://api.themoviedb.org`;

function trendingMovies() {
    return  fetch(`${BASE_URL}/3/trending/all/day?api_key=${KEY}`)
    .then(response => response.json())
}


function searchMovieByName(query) {
    return fetch(`${BASE_URL}/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
    .then(response => response.json())
} 


function getSpecificMovie(id) {
    return fetch(`${BASE_URL}/3/movie/${id}?api_key=${KEY}&language=en`)
    .then(response => response.json())
}

function getCastsMovie(id) {
    return fetch(`${BASE_URL}/3/movie/${id}/credits?api_key=${KEY}&language=en-US`)
    .then(response => response.json())
}

function getMovieReviews(id) {
    return fetch(`${BASE_URL}/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
    .then(response => response.json())
}


export { trendingMovies ,searchMovieByName,getSpecificMovie, getCastsMovie ,getMovieReviews};







// 5c9fbebd8a4183e94064202846ae6076

// Пример API-запроса
//https://api.themoviedb.org/3/movie/550?api_key=5c9fbebd8a4183e94064202846ae6076


// Токен доступа для чтения API (v4 auth)
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzlmYmViZDhhNDE4M2U5NDA2NDIwMjg0NmFlNjA3NiIsInN1YiI6IjY0MjJlMWVlMmRjOWRjMDBiZjVhMjA2ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E1o9bGh1triGAbBMzaD59hJnAjgKcCWj95Zj3-HYBUE
