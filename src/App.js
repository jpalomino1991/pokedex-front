import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Attack from './component/Attack'
import Ability from './component/Ability'
import Pokedex from './component/Pokedex'
import Main from './component/Main'
import Loading from "./component/Loading"
import Navbar from "./component/Navbar"
import Profile from "./component/Profile"
import AttackDetail from './component/AttackDetail'
import AbilityDetail from './component/AbilityDetail'
import PokedexDetail from './component/PokedexDetail'
import PrivateRoute from './component/private-route'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"
import history from "./utils/history"

function App() {
  const { isLoading, error } = useAuth0()

  if (error) {
    return <div>Oops... {error.message}</div>
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="App">
      <Router history={history}>
        <Navbar/>
        <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/attack" component={Attack} />
          <PrivateRoute exact path="/ability" component={Ability} />
          <PrivateRoute exact path="/pokedex" component={Pokedex}/>
          <PrivateRoute path="/attack/detail/:id" component={AttackDetail} />
          <PrivateRoute path="/ability/detail/:id" component={AbilityDetail} />
          <PrivateRoute path="/pokedex/detail/:id" component={PokedexDetail} />
        </Switch>
        </header>
      </Router>
    </div>
  );
}

export default App;
