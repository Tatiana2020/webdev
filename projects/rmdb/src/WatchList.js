import { MovieListSelection } from "./MovieListSelection"

export const WatchList = ({watchlistMovies}) => (
    <MovieListSelection 
        movies={watchlistMovies} 
        title="Movies To Watch" 
        subtitle="Dive into your favorites!"/>
)
