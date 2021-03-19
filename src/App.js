import axios from 'axios';
import React from 'react';
import './App.css';
import Grid from './Grid'
import Form from './Form'

function App() {

  return (
    <div className="App">
      <Grid apiLink="users" />
      <Grid apiLink="testUsers" />
      <Form />
    </div>
  );
}

export default App;
