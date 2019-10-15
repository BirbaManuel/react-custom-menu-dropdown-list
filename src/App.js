import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="el el_1">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="el el_2">Welcome</div>
        <div className="el el_3">
          <div className="element_dropdown_list">dropdownlist</div>
          <div className="element_input_date">input date</div>
        </div>
      </header>

    </div>
  );
}

export default App;
