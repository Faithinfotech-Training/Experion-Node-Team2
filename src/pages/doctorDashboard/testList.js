import React from "react"
import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function TestList(props){
        const[patients, setPatients]=useState([]);

        const navigate = useNavigate();
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
     <h3>{props.details.labReportId}</h3>
     <h3>{patients.patientName}</h3>
     <button className="button"onClick ={() => navigate(`/patient/labresult/${props.details.labReportId}`)}>View Details</button>
  </div>)
}
export default TestList;