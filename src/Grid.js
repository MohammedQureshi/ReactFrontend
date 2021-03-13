import React from 'react'
import GridItem from './GridItem'

function Grid({apiLink}) {
    return(
        <div>
          <table className="userTable">
            <tr>
            <td className="fillArea">ID</td>
              <td className="fillArea">First Name</td>
              <td className="fillArea">Last Name</td>
              <td className="fillArea">Age</td>
              <td className="fillArea">Address</td>
              <td className="fillArea">Gender</td>
            </tr>
            <GridItem apiLinkGrid={apiLink}/>
          </table>
        </div>
      )
}

export default Grid
