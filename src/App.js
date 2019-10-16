import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Menu  from './component/dropdown/Menu';
import CustomeDropDown  from './component/customeDropDown/CustomeDropDown';

function App() {
  return (
    <Router>
      <Menu/>
      <Route exact path="/" render={ (props) => <CustomeDropDown {...props}/>} />
    </Router>
  );
}

export default App;
