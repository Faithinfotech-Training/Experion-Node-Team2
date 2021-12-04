
import { useParams } from "react-router";
import MedicineForm from './medicineForm';
import TestForm from './testPatient';
import "./doctor.css"


function Prescription(){
    const {id}=useParams();
   return (
        <>
        <center><h1>Prescription</h1></center>
        <div class="patientId">Patient ID :{id}</div>
        <MedicineForm/> 
        <hr/>
        <TestForm/>      
        </>
    );
}




export default Prescription;