import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

export default function Session(){
    const [seats ,setSeats] = useState([])
    const { sessionId } = useParams()

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${Math.floor(sessionId/100000)}/seats`)
        promise.then((response)=>{
            setSeats(response.data.seats)
        }) // eslint-disable-next-line
    }, []) 

    return (
        <div className="session">
            <h2 className="page__title">Selecione o(s) assento(s)</h2>
            <ul className="seats__list">
                {seats.map((seat)=>(
                    <li className={seat.isAvailable ? "seat" : "seat unavailable"}>{seat.name}</li>
                ))}
            </ul>
            <div className="seat__legend">
                <div>
                    <li className="seat selected"></li>
                    <span>Selecionado</span>
                </div>
                <div>
                    <li className="seat"></li>
                    <span>Disponível</span>
                </div>
                <div>
                    <li className="seat unavailable"></li>
                    <span>Indisponível</span>
                </div>
            </div>
            <div className="buyer__inputs">
                <div>
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite seu nome..."></input>
                </div>
                <div>
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite seu CPF..."></input>
                </div>
            </div>
            <Link to="/success">
                <button className="button">Reservar assento(s)</button>
            </Link>
        </div>        
    )
}