import React from 'react'
import axios from 'axios'

const Form = () => {

    function submitForm(event){
        event.preventDefault();
        axios.post('http://localhost:8080/reactdata', {
            firstName: event.target.fname.value,
            lastName: event.target.lname.value,
            age: event.target.age.value,
            addressLine: event.target.address.value,
            gender: event.target.gender.value
          })
          .then((response) => {
            console.log(response);
            window.location.reload()
          }, (error) => {
            console.log(error);
          });
    }

    return (
        <div>
          <form onSubmit={submitForm}>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/><br/><br/>

                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname"/><br/><br/>

                <label for="age">Age:</label>
                <input type="number" id="age" name="age"/><br/><br/>

                <label for="address">Address:</label>
                <input type="text" id="address" name="address"/><br/><br/>

                <label for="gender">Gender:</label>
                <input type="text" id="gender" name="gender"/><br/><br/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form
