import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Menu  from './component/dropdown/Menu';
import customeDropDown  from './component/customeDropDown/customeDropDown';

function App() {
  return (
    <Router>
      <Menu/>
      <Route exact path="/" render={ (props) => <customeDropDown {...props}/>} />
    </Router>
  );
}

export default App;
