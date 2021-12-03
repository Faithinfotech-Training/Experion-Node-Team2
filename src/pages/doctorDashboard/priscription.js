
import { useParams } from "react-router";
import MedicineForm from './medicineForm';
import TestForm from './testPatient';


function Prescription(){
    const {id}=useParams();
   return (
        <>
        <center><h1>Prescription</h1></center>
        <h2>Patient ID :{id}</h2>
        <MedicineForm/> 
        <hr/>
        <TestForm/>      
        </>
    );
}




export default Prescription;