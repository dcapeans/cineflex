import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

export default function Session({movie, session, setSession, setSeatsReserved, seatsReserved, setSelecteds, selecteds }){
    const [seats ,setSeats] = useState([])
    const [day, setDay] = useState({})
    const { sessionId } = useParams()

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${sessionId}/seats`)
        promise.then((response)=>{
            setSeats(response.data.seats)
            setSession(response.data)
            setDay(response.data.day)
        }) // eslint-disable-next-line
    }, []) 

    const addSelected = (id, name, isAvailable) => {
        const wasSelected = selecteds.ids.find((item)=> item === id )
        if(!isAvailable){
            alert("Esse assento não está disponível!")
        }

        if(!wasSelected){
            selecteds.ids.push(id)
        }else {
            const newArray = selecteds.ids.filter((item)=> item !== id)
            selecteds.ids = newArray
            console.log(selecteds)
        }
        addSeatsReserved(name)
    }

    const addSeatsReserved = (name) => {
        const newArray = [...seatsReserved, name]
        setSeatsReserved(newArray)
    }

    const reserveSeats = () => {
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many", selecteds)
        promise.catch((error) => {
            console.log(error)
        })
        console.log("cliquei")
    }

    return (
        <div className="session">
            <h2 className="page__title">Selecione o(s) assento(s)</h2>
            <ul className="seats__list">
                {seats.map((seat)=>(
                    <li className={seat.isAvailable ? "seat" : "seat unavailable"} key={seat.id} onClick={()=> addSelected(seat.id, seat.name, seat.isAvailable)}>{seat.name}</li>
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
                    <input placeholder="Digite seu nome..." onChange={(event) => setSelecteds({...selecteds, name: event.target.value})}></input>
                </div>
                <div>
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite seu CPF..." onChange={(event) => setSelecteds({...selecteds, cpf: event.target.value})}></input>
                </div>
            </div>
            <Link to="/success">
                <button className="button" onClick={reserveSeats} disabled={!selecteds.ids.length || !selecteds.name || !selecteds.cpf ? true : false}>Reservar assento(s)</button>
            </Link>
            <div className="movie__footer">
                <div className="poster__footer">
                    <img src={`${movie.posterURL}`} alt=""/>
                </div>
                <div>
                    <span>{movie.title}</span>
                    <p>{day.weekday} - {session.name}</p>
                </div>
            </div>
        </div>        
    )
}