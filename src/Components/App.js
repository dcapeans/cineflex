import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import { useState } from "react"
import Header from "./Header"
import Home from "./Home"
import Movie from "./Movie";
import Session from "./Session";
import Success from "./Success";

export default function App () {
    const [movie, setMovie] = useState({})
    const [session, setSession] = useState({})
    const [seatsReserved, setSeatsReserved] = useState([])
    const [selecteds, setSelecteds] = useState({ids:[], name: "", cpf: ""})

    const resetStates = () => {
        setMovie({})
        setSession({})
        setSeatsReserved([])
        setSelecteds({ids:[], name: "", cpf: ""})
    }

    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/sessions/:movieId" exact>
                    <Movie movie={movie} setMovie={setMovie}/>
                </Route>
                <Route path="/seats/:sessionId" exact>
                    <Session movie={movie} session={session} setSession={setSession} seatsReserved={seatsReserved} setSeatsReserved={setSeatsReserved} selecteds={selecteds} setSelecteds={setSelecteds}/>
                </Route>
                <Route path="/success" exact>
                    <Success movie={movie} session={session} seatsReserved={seatsReserved} selecteds={selecteds} resetStates={resetStates}/>
                </Route>
            </Switch>
        </Router>
    )
}