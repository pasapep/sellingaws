import React from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";// import Header from "./Header";
import NavBar from"./NavBar"



function App() {




  return (
    <BrowserRouter>
    <div className="App">
      <div> 
        <h3> Retro Games </h3>
      </div>
      <NavBar />

      <h1> Hello </h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
