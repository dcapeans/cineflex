import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"



export default function Movie(){
    const [movie, setMovie] = useState({})
    const [days, setDays] = useState([])
    const { movieId } = useParams()

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${movieId}/showtimes`)
        promise.then((response)=>{
            setMovie(response.data)
            setDays(response.data.days)
        })
    }, [])

    return (
        <div className="movie__main">
            <div className="movie__sessions">
                <h2 className="page__title">Selecione o horário</h2>
                {days.map((day)=>(
                    <div key={day.id}>
                        <p>{day.weekday} - {day.date}</p>
                        <div className="showtimes">
                            {day.showtimes.map((time)=>(
                                <Link to={`/session/${day.id}`} className="showtime" key={time.id}>
                                    {time.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="movie__footer">
                <div className="poster__footer">
                    <img src={`${movie.posterURL}`} alt=""/>
                </div>
                <span>{movie.title}</span>
            </div>
        </div>
    )
}