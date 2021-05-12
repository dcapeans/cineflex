import { Link } from "react-router-dom"

export default function Success(){
    return (
        <div className="success__page">
            <h2 className="success__title">Pedido feito com sucesso!</h2>
            <div className="review">
                <h2>Filme e Sessão</h2>
                <p>Enola Holme</p>
                <p>24/06/2021 15:00</p>
            </div>
            <div className="review">
                <h2>Ingressos</h2>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </div>
            <div className="review">
                <h2>Comprador</h2>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </div>
            <Link to="/">
                <button className="button">Voltar para Home</button>
            </Link>
        </div>
    )
}