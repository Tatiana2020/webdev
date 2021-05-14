import {MovieThumbnail} from './MovieThumbnail'
import './MovieList.scss'

export const MovieList = ({movies, onAddToWatchlist, displayAddButton, onEdit, displayEditButton}) => {
    return (
        <ul className="MovieList">
            {movies.map((movie) => (
                <li key={movie.imdbID}>
                    <MovieThumbnail 
                        movie={movie} 
                        onAddToWatchlist={onAddToWatchlist} 
                        displayAddButton={displayAddButton}
                        onEdit={onEdit}
                        displayEditButton={displayEditButton}/>
                </li>
            ))}
        </ul>
    )
}
