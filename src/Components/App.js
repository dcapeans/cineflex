import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Header from "./Header"
import Home from "./Home"
import Movie from "./Movie";
import Session from "./Session";

export default function App () {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/movie/:movieId" exact>
                    <Movie />
                </Route>
                <Route path="/session/:sessionId" exact>
                    <Session />
                </Route>
                <Route path="/success" exact>

                </Route>
                
            </Switch>
        </Router>
    )
}