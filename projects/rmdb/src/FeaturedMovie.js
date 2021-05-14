import {MoviePoster} from './MoviePoster.js'

export const FeaturedMovie = ({featuredMovie}) => {
    const [month, day, year] = new Date().toLocaleDateString('en-US').split('/')

    if (!featuredMovie) return null

    return (
        <section>
            <h3>Featured for {month}/{day}/{year}</h3> 
            <MoviePoster poster ={featuredMovie.Poster} title={featuredMovie.Title}/>
            <p>{featuredMovie.Title}</p>
            <div>{featuredMovie.imdbRating}</div>
        </section>
    )
  }
