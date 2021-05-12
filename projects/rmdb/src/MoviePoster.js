import db from './db.json'

const movies = db.movies
const featuredMovie = movies [0]

export const MoviePoster = () => (
    <img 
        src={featuredMovie.Poster} 
        width={75} 
        alt={featuredMovie.Title}>
    </img>
)