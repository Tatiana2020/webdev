import {MovieListSelection} from "./MovieListSelection"

export const AllMovies = ({allMovies, onAddToWatchlist, onEdit}) => (
    <MovieListSelection 
        movies={allMovies} 
        title="All Movies" 
        subtitle="Discover something new."
        displayFilter={true} 
        onAddToWatchlist={onAddToWatchlist}
        displayAddButton={true}
        onEdit={onEdit}
        displayEditButton={true}
        />
)