import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router } from '@reach/router'
import Attack from './component/Attack'
import Ability from './component/Ability'
import Pokedex from './component/Pokedex'
import Main from './component/Main'
import AttackDetail from './component/AttackDetail'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Main path="/" />
        <Attack path="attack" />
        <Ability path="ability" />
        <Pokedex path="pokedex" />
        <AttackDetail path="attack/detail"/>
      </Router>
      </header>
    </div>
  );
}

export default App;
