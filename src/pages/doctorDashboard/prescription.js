
import { useParams } from "react-router";
import MedicineForm from './medicineForm';
import TestForm from './testPatient';
import "./doctor.css";
import roleController from "../../helpers/roleLogin/roleLogin";


function Prescription(){

    if(!roleController.isDoctor()){
        window.location = '/login'
      }

    const {id}=useParams();
   return (
        <>
        <center><h1>Prescription</h1></center>
        <div class="patientId">Patient ID :{id}</div>
        <br/>
        <MedicineForm/> 
        <hr/>
        <TestForm/>      
        </>
    );
}




export default Prescription;