import React from "react"
import {Link} from "react-router-dom"
function PatientList(props){

 
  return(
    <div>
     <h3>{props.details.name}</h3>
     <button className="button"><Link to={`/patientdetails/${props.details.id}`}>View Details</Link></button>
  </div>)
}
export default PatientList;