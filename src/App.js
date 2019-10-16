import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Menu  from './component/dropdown/Menu';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Menu/>
        <Route exact path="/choisir" render={ (props) => <div>Choisir un marché</div>} />
        <Route exact path="/Particulier" render={ (props) => <div>Particulier</div>} />
        <Route exact path="/Professionnel" render={ (props) => <div>Professionnel</div>} />
        <Route exact path="/bp" render={ (props) => <div>Banque-privée</div>} />
        <Route exact path="/Agriculteur" render={ (props) => <div>Agriculteur</div>} />
        <Route exact path="/Association" render={ (props) => <div>Association</div>} />
        <Route exact path="/collPub" render={ (props) => <div>Collectivités publiques</div>} />
        <Route exact path="/Entreprise" render={ (props) => <div>Entreprise</div>} />
      </Router>
    </div>
  );
}

export default App;
