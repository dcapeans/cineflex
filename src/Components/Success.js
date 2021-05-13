import { Link } from "react-router-dom"

export default function Success({movie, session, seatsReserved, selecteds, resetStates}){

    return (
        <div className="success__page">
            <h2 className="success__title">Pedido feito com sucesso!</h2>
            <div className="review">
                <h2>Filme e Sessão</h2>
                <p>{movie.title}</p>
                <p>{session.day.date} - {session.name}</p>
            </div>
            <div className="review">
                <h2>Ingressos</h2>
                {seatsReserved.map((seat)=>(
                    <p key={seat.id}>Assento {seat.name}</p>
                ))}
            </div>
            <div className="review">
                <h2>Comprador</h2>
                <p>Nome: {selecteds.name}</p>
                <p>CPF: {selecteds.cpf}</p>
            </div>
            <Link to="/">
                <button className="button" onClick={resetStates}>Voltar para Home</button>
            </Link>
        </div>
    )
}