import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router'
import Attack from './component/Attack'
import Main from './component/Main'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Main path="/" />
        <Attack path="attack" />
      </Router>
      </header>
    </div>
  );
}

export default App;
