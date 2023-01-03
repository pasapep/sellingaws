import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  fetch ("http://localhost:3000/comments")
  .then (resp => resp.json())
  .then (data => console.log(data))


  return (
    <div className="App">

      <h1> Hello </h1>
    </div>
  );
}

export default App;
