import { MovieList } from "./MovieList"
import { useState } from 'react'
import { Section } from './Section'

export const MovieListSelection = ({movies, title, subtitle, displayFilter, onAddToWatchlist, displayAddButton, onEdit, displayEditButton}) => {
    const [filter, setFilter] = useState('all')

    if (!movies) return null

    const filteredList = (filter !== 'all')
        ? [...movies].filter(movie => movie.Type === filter) 
        : [...movies]
    
    return(
        <Section title={title} subtitle={subtitle}>
            {displayFilter && 
            <div>
                <button onClick={() => setFilter('series')}>TV Series</button>
                <button onClick={() => setFilter('movie')}>Movies</button>
                <button onClick={() => setFilter('all')}>All</button>
            </div>}

            <MovieList 
                movies={filteredList} 
                onAddToWatchlist={onAddToWatchlist} 
                displayAddButton={displayAddButton} 
                onEdit={onEdit}
                displayEditButton={displayEditButton}/>
        </Section>
    )
}