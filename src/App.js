import React from 'react';
import './App.css';
import Grid from './Grid'

function App() {
  return (
    <div className="App">
      <Grid apiLink="users" />
      <Grid apiLink="testUsers" />
    </div>
  );
}

export default App;
