export const getMovies = query => {
    return fetch(`https://www.omdbapi.com/?s=${query}&apikey=5e384b78`)
    .then(res => res.json())
    .then(data => data.Search || [])
    .catch(error => console.log(error));
}