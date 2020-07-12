import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Attack from './component/Attack'
import Ability from './component/Ability'
import Pokedex from './component/Pokedex'
import Main from './component/Main'
import AttackDetail from './component/AttackDetail'
import AbilityDetail from './component/AbilityDetail'
import PokedexDetail from './component/PokedexDetail'
import Header from './component/Header'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/attack">
            <Attack />
          </Route>
          <Route exact path="/ability">
            <Ability/>
          </Route>
          <Route exact path="/pokedex">
            <Pokedex/>
          </Route>
          <Route path="/attack/detail/:id" component={AttackDetail} />
          <Route path="/ability/detail/:id" component={AbilityDetail} />
          <Route path="/pokedex/detail/:id" component={PokedexDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
