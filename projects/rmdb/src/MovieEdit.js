import { useState } from "react"
import { handleInputChange } from "./handleInputChange"

const MAX_YEAR = new Date().getFullYear()

export const MovieEdit = ({movie, onClose, onSave}) => {
    const [title, setTitle] = useState(movie.Title)
    const [year, setYear] = useState(movie.Year)
    const [type, setType] = useState(movie.Type)
    const [poster, setPoster] = useState(movie.Poster)
    const [rating, setRating] = useState(movie.imdbRating)

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave({
            ...movie,
            Title: title,
            Type: type
        })
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <input id="title" type="text" value={title} required onChange={handleInputChange(setTitle)}></input>
        </div>         
        <div className="form-group">
            <label htmlFor="type">Type</label>
            <input id="movie" type="radio" value="movie" onChange={handleInputChange(setType)} checked={type === "movie"}/>
            <label htmlFor="movie">Movie</label>
            <input id="series" type="radio" value="series" onChange={handleInputChange(setType)} checked={type === "series"}/>
            <label htmlFor="series">Series</label>
        </div>         
        <div className="form-group">
            <label htmlFor="year">Year</label>
            <input 
                type="number" 
                required min={1900} 
                max={MAX_YEAR} 
                step={1} 
                value={year}
                onChange={handleInputChange(setYear)}/>
        </div>         
        <div className="form-group">
            <label htmlFor="poster">Poster</label>
        </div>         
        <div className="form-group">
        </div> 
        <div>
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Save</button>
        </div>
        </form>
    )
}