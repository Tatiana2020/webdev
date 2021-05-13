import {MovieList} from "./MovieList"

export const WatchList = ({watchlistMovies}) => (
    <section>
        <h3>Movies to watch:</h3>
        <MovieList movies={watchlistMovies}/>
    </section>
)
