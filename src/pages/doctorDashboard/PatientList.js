import React from "react"
import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
import axios from "axios";

function PatientList(props){
  const[patients, setPatients]=useState([]);
  useEffect(()=>{
    axios
    .get(`http://localhost:4000/patients/${props.details.patientId}`)
    .then(response=>{
        console.log('Promise was fullfilled')
        console.log(response)
        setPatients(response.data)
    })},[props.details.patientId])

 
  return(
    <div>
     <h3>{patients.patientName}</h3>
     <button className="button"><Link to={`/patientdetails/${props.details.patientId}`}>View Details</Link></button>
  </div>)
}
export default PatientList;