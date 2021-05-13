import {MovieList} from "./MovieList"

export const AllMovies = ({allMovies}) => (
    <section>
        <h3>All movies:</h3>
        <MovieList movies={allMovies}/>
    </section>
)