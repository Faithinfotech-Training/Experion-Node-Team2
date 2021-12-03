import React from "react"
import {useState,useEffect} from "react"
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";


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
        

        return(<>
        <h2>Patient Details</h2>
        
        <div>
        <h3>PatientId: {patients.patientId}</h3>
        <h3>Patient Name: {patients.patientName}</h3>
        <h3>DOB :{patients.dateOfBirth}</h3>
        <h3>Address :{patients.address} </h3>
        <h3>Phone :{patients.phoneNumber} </h3>
        <p><button class="button" onClick={()=>navigate(`/prescriptionadd/${patients.patientId}`)}>ADD CONSULTATION</button></p>
        <p><button class="button" onClick={()=>navigate(`/patient/tests/${patients.patientId}`)}>VIEW LABRESULT</button>
       </p>
        <a href="/appointmentlist">Go Back</a>
        </div>
        </>)}

   
export default PatientDetails;