import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"



export default function Movie({movie, setMovie}){
    const [days, setDays] = useState([])
    const { movieId } = useParams()

    useEffect(()=>{
        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/movies/${movieId}/showtimes`)
        promise.then((response)=>{
            setMovie(response.data)
            setDays(response.data.days)
        }) // eslint-disable-next-line
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
                                <Link to={`/seats/${time.id}`} className="showtime" key={time.id}>
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