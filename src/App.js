import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Attack from './component/Attack'
import Ability from './component/Ability'
import Pokedex from './component/Pokedex'
import Main from './component/Main'
import AttackDetail from './component/AttackDetail'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/attack">
            <Attack />
          </Route>
          <Route path="/ability">
            <Ability/>
          </Route>
          <Route path="/pokedex">
            <Pokedex/>
          </Route>
          <Route path="/attack/detail/:id" component={AttackDetail} />
        </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;
