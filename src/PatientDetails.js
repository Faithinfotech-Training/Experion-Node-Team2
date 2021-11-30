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
        .get(`http://localhost:4000/patient/${id}`)
        .then(response=>{
            console.log('Promise was fullfilled')
            console.log(response)
            setPatients(response.data)
        })},[])
        

        return(<>
        <h2>Patient Details</h2>
        
        <div>
        <h3>Patient Name: {patients.name}</h3>
        <h3>Age :{patients.age}</h3>
        <h3>Blood Group :{patients.bloodGruoup} </h3>
        <h3>Phone :{patients.phone} </h3>
        <h3>Address:{patients.address} </h3>
        <p><button class="button" onClick={()=>navigate(`/prescription/${patients.id}`)}>PRESCRIPTION</button>
       </p>
        <a href="/patientlist">Go Back</a>
        </div>
        </>)}

   
export default PatientDetails;