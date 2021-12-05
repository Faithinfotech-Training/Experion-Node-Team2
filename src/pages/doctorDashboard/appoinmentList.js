import {useState,useEffect} from "react"
import axios from "axios";
import Patients from './PatientList'
import roleController from "../../helpers/roleLogin/roleLogin";

function Listall(){

    if(!roleController.isDoctor()){
        window.location = '/login'
      }

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
            console.log(response.data)
            setAppoinments(response.data)
        })
    },[]);
        
        return(<>
        <center><h2>Appointments</h2></center>
                 <div>{appoinments.map(appoinment=>
                    <div key={appoinment.id}> 
                        <Patients details= {appoinment}/>
                    </div>)}
                </div>
                 </>)
   
   }

export default Listall;