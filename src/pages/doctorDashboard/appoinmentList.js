import {useState,useEffect} from "react"
import axios from "axios";
import Patients from './patientList'
function Listall(){
    const[appoinments, setAppoinments]=useState([]);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);

  
    useEffect(()=>{
        axios
        .get(`http://localhost:4000/appointments/bydate/${today}`)
        .then(response=>{
            console.log('Promise was fullfilled')
            console.log(response)
            setAppoinments(response.data)
        })})
        

        return(<>
        <h2>APPOINMENTS</h2>
                 <div>{appoinments.map(appoinment=><div key={appoinment.id}> <Patients details= {appoinment}/></div>)}</div>
                 </>)
   
   }

export default Listall;