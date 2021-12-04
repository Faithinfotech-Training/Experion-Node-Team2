import React from "react"
import {useState,useEffect} from "react"
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';

function PatientDetails(){
    const[patients, setPatients]=useState([]);
    const {id}=useParams()
    const navigate=useNavigate();
    useEffect(()=>{
        axios
        .get(`http://localhost:4000/appointments/patients/${id}`)
        .then(response=>{
            console.log('Promise was fullfilled')
            console.log(response)
            setPatients(response.data)
        })},[id])
        
    
      return(
        <Card className="text-center">
        <Card.Header>Patient Details</Card.Header>
        <Card.Body>
          <Card.Title> Patient Name :{patients.patientName}</Card.Title>
          <Card.Title> Patient ID :{patients.patientId}</Card.Title>
          <Card.Title> DOB :{patients.dateOfBirth}</Card.Title>
          <Card.Title> Address :{patients.address}</Card.Title>
          <Card.Title> Phone Number:{patients.phoneNumber} </Card.Title>

          <Card.Text>
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate(`/prescriptionadd/${patients.patientId}`)}>ADD CONSULTATION</Button>
          <Button variant="primary" onClick={()=>navigate(`/patient/tests/${patients.patientId}`)}>VIEW LABRESULT</Button>
        </Card.Body>
        <Card.Footer className="text-muted"><a href="/appointmentlist">Go Back</a></Card.Footer>
      </Card>

      )
    }

   
export default PatientDetails;