import {useState,useEffect} from "react"
import Patients from './PatientList'
import axios from "axios";
function PatientList(){
    const[patients, setPatients]=useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:4000/appoinments")
        .then(response=>{
            console.log('Promise was fullfilled')
            console.log(response)
            setPatients(response.data)
        })})
        

        return(<>
        <h2>APPOINMENTS</h2>
                 <div>{patients.map(patient=><div key={patient.id}> <Patients details= {patient}/></div>)}</div></>);
   
   }

export default PatientList;