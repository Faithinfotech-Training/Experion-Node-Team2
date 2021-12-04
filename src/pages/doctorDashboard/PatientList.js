import React from "react"
import {Link} from "react-router-dom"
import {useState,useEffect} from "react"
import axios from "axios";
import { Card, Button } from 'react-bootstrap';
import './doctor.css'

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
    <div className="forDoctorPage">
    <Card className="text-center">
  <Card.Header> Patient Name : {patients.patientName}</Card.Header>
  <Card.Body>
    <Card.Title> Patient ID :{patients.patientId}</Card.Title>
    <Card.Text>
    </Card.Text>
    <Button variant="primary"><Link to={`/patientdetails/${props.details.patientId}`}>View Details</Link></Button>
  </Card.Body>
  <Card.Footer className="text-muted"></Card.Footer>
</Card>
</div>
)
}
export default PatientList;