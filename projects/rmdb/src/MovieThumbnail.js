import {MoviePoster} from "./MoviePoster"

export const MovieThumbnail = ({movie: {Poster, Title}}) => (
    <div className="MovieThumbnail">
        <MoviePoster poster={Poster}/>
        {Title}
    </div>
)