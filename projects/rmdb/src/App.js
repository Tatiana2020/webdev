import './App.scss'
import {NavBar} from './NavBar.js'
import {FeaturedMovie} from './FeaturedMovie.js'
import {WatchList} from './WatchList.js'

export const App = () => (
  <div className = "App">
    <NavBar/>
    <FeaturedMovie/>
    <WatchList/>
  </div>
)
