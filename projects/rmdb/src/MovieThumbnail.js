import {MoviePoster} from "./MoviePoster"

export const MovieThumbnail = ({movie, onAddToWatchlist, displayAddButton, onEdit, displayEditButton}) => (
    <div className="MovieThumbnail">
        <MoviePoster poster={movie.Poster}/>
        {movie.Title}
        {displayAddButton && <button onClick={() => onAddToWatchlist(movie)}>+</button>}
        {displayEditButton && <button onClick={() => onEdit(movie)}>Edit</button>}
    </div>
)