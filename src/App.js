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
      <tr>
        <td>{apiCall.firstName}</td>
        <td>{apiCall.lastName}</td>
        <td>{apiCall.age}</td>
        <td>{apiCall.addressLine}</td>
        <td>{apiCall.gender}</td>
      </tr>
    )
  })
}

const UserTable = () => {
  return(
    <div>
      <table className="userTable">
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>Age</td>
          <td>Address</td>
          <td>Gender</td>
        </tr>
        <APIData />
      </table>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <UserTable />
    </div>
  );
}

export default App;
