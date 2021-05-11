import { useState, useEffect } from "react"
import axios from "axios"

export default function Home(){
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies")
        promise.then((response) => (
            setMovies(response.data)
        ))
    }, [])
    
    return (
        <div className="home">
            <h2>Selecione seu filme</h2>
            <ul className="movie__list">
                {movies.map((movie)=>(
                    <li className="movie__card" key={movie.id} alt={movie.title}>
                        <img src={movie.posterURL} />
                    </li>
                ))}
            </ul>
        </div>
    )
}