import './App.scss'
import {NavBar} from './NavBar.js'
import {FeaturedMovie} from './FeaturedMovie.js'
import {WatchList} from './WatchList.js'
import {AllMovies} from './AllMovies.js'
//import db from './db.json'
import { useEffect, useState } from 'react'
import { LearnMore } from './LearnMore'
import { MovieEdit } from './MovieEdit'
import axios from 'axios'

export const App = () => {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([]) //(db.movies)
  const [featuredMovie, setFeaturedMovie] = useState(null)
  const [watchlistMovies, setWatchlistMovies] = useState([]) //(movies.filter(watchListMovie => watchListMovie.watchlist != null && watchListMovie.watchlist))
  const [movieBeingEdited, setMovieBeingEdited] = useState(null)

  useEffect(() => {
    (async () => {
      const {data} = await axios.get('http://localhost:3001/movies')
      setMovies(data)
      setLoading(false)
    })()
  }, [])

  useEffect(() => {
    setWatchlistMovies(movies.filter(watchListMovie => watchListMovie.watchlist != null && watchListMovie.watchlist))
  }, [movies])

  useEffect(() => {
    setFeaturedMovie(movies[0])
  }, [movies])

  const handleWatchlistAdd = (movie) => {
    const updatedWatchList = watchlistMovies.includes(movie) ? watchlistMovies : [...watchlistMovies, movie]
    setWatchlistMovies(updatedWatchList)
  }

  const handleEditMovie = (movie) => {
    setMovieBeingEdited(movie)
  }

  const handleMovieSave = async (updatedMovie) => {
    const response = await axios.put(`http://localhost:3001/movies/${updatedMovie.imdbID}`, {...updatedMovie})
    setMovies(movies.map((movie) => (movie.imdbID === updatedMovie.imdbID ? updatedMovie : movie)))
    setMovieBeingEdited(null)
  }

  return (
      <div className = "App">
        <NavBar/>

        {loading ? (<p>Loading...</p>) 
        : (
        <>
          <FeaturedMovie featuredMovie={featuredMovie}/>
          <WatchList watchlistMovies={watchlistMovies} />
          <AllMovies allMovies={movies} onAddToWatchlist={handleWatchlistAdd} onEdit={handleEditMovie}/>
          {movieBeingEdited && 
            <MovieEdit 
              movie={movieBeingEdited}
              onClose={() => setMovieBeingEdited(null)}
              onSave={handleMovieSave}
              />}
        </>
        )}
        <LearnMore/>
      </div>
    )
}