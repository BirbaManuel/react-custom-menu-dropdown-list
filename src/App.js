import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Menu  from './component/dropdown/Menu';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Menu/>
        <Route exact path="/" render={ (props) => <div>Display component "Choisir un marché"</div>} />
        <Route exact path="/Particulier" render={ (props) => <div> Display component "Particulier"</div>} />
        <Route exact path="/Professionnel" render={ (props) => <div>Display component "Professionnel"</div>} />
        <Route exact path="/bp" render={ (props) => <div>Display component "Banque-privée"</div>} />
        <Route exact path="/Agriculteur" render={ (props) => <div>Display component "Agriculteur"</div>} />
        <Route exact path="/Association" render={ (props) => <div>Display component "Association"</div>} />
        <Route exact path="/collPub" render={ (props) => <div>Display component "Collectivités publiques"</div>} />
        <Route exact path="/Entreprise" render={ (props) => <div>Display component "Entreprise"</div>} />
        <Route exact path="/assurance" render={ (props) => <div>Display component "Focus Assurance"</div>} />
        <Route exact path="/epargne" render={ (props) => <div>Display component "Focus Epargne"</div>} />
        <Route exact path="/credits" render={ (props) => <div>Display component "Focus Crédits"</div>} />
        <Route exact path="/nexecur" render={ (props) => <div>Display component "Nexecur"</div>} />
        <Route exact path="/amundi" render={ (props) => <div>Display component "Amundi"</div>} />
        <Route exact path="/unimedia" render={ (props) => <div>Display component "Uni-médias"</div>} />
      </Router>
    </div>
  );
}

export default App;
