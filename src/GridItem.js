import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GridItem  ({apiLinkGrid}) {
    const[apiCall, setAPICall] = useState([]);

    const getAPIData = () => {
      axios.get("http://localhost:8080/"+apiLinkGrid).then(response => {
        console.log(response);
        setAPICall(response.data)
      }, err => {
        console.log("API Call failed!");
      })
    }
  
    useEffect(() => {
      getAPIData();
    }, [])
  
    return apiCall.map((apiCall, index) => {
      return(
        <tr className={index}>
          <td>{apiCall.id}</td>
          <td>{apiCall.firstName}</td>
          <td>{apiCall.lastName}</td>
          <td>{apiCall.age}</td>
          <td>{apiCall.addressLine}</td>
          <td>{apiCall.gender}</td>
        </tr>
      )
    })
}

export default GridItem
