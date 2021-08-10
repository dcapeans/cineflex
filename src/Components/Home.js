import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Home(){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/movies`)
        promise.then((response) => (
            setMovies(response.data)
        ))
    }, [])
    
    return (
        <div className="home">
            <h2 className="page__title">Selecione seu filme</h2>
            <ul className="movie__list">
                {movies.map((movie)=>(
                    <Link to={`/sessions/${movie.id}`} key={movie.id} >
                        <li className="movie__card" >
                            <img src={movie.posterURL} alt={movie.title} />
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}