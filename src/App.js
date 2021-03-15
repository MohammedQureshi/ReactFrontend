import axios from 'axios';
import React from 'react';
import './App.css';
import Grid from './Grid'

function App() {

  function activateLasers(){
    console.log("Clicked");

    axios.post('http://localhost:8080/reactdata', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      firstName: 'Finn',
      lastName: 'Williams'
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });

  }

  return (
    <div className="App">
      <Grid apiLink="users" />
      <Grid apiLink="testUsers" />
      <button onClick={activateLasers}>Activate Lasers</button>
    </div>
  );
}

export default App;
