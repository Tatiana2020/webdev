import {MoviePoster} from './MoviePoster.js'
import db from './db.json'

const movies = db.movies

export const FeaturedMovie = () => {
    const featuredMovie = movies[0]
    const [month, day, year] = new Date().toLocaleDateString('en-US').split('/')

    return (
        <section>
            <h3>Featured for {month}/{day}/{year}</h3> 
            <MoviePoster/>
            <p>{featuredMovie.Title}</p>
            <div>{featuredMovie.imdbRating}</div>
        </section>
    )
  }
