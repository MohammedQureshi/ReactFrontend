import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const APIData = () => {

  const[apiCall, setAPICall] = useState([]);

  const getAPIData = () => {
    axios.get("http://localhost:8080/users").then(response => {
      console.log(response);
      setAPICall(response.data)
    })
  }

  useEffect(() => {
    getAPIData();
  }, [])

  return apiCall.map((apiCall, index) => {
    
    return(
      <div key={index}>
        <h1 className="name">{apiCall.firstName} {apiCall.lastName}</h1>
        <p>Address: {apiCall.addressLine}</p>
      </div>
    )
  })
}

function App() {
  return (
    <div className="App">
      <APIData />
    </div>
  );
}

export default App;
