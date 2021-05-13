import './App.scss'
import {NavBar} from './NavBar.js'
import {FeaturedMovie} from './FeaturedMovie.js'
import {WatchList} from './WatchList.js'
import {AllMovies} from './AllMovies.js'
import db from './db.json'

const movies = db.movies
const watchlistMovies = movies.filter(watchListMovie => watchListMovie.watchlist != null && watchListMovie.watchlist)
const featuredMovie = movies[0]

export const App = () => (
  <div className = "App">
    <NavBar/>
    <FeaturedMovie featuredMovie={featuredMovie}/>
    <WatchList watchlistMovies={watchlistMovies}/>
    <AllMovies allMovies={movies}/>
  </div>
)
