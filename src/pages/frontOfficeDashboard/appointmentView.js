import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import {Button} from 'react-bootstrap'
import roleController from "../../helpers/roleLogin/roleLogin";

//destructuring react to get only useState
function AppointmentView() {

    if(!roleController.isFrontoffice()){
        window.location = '/login'
      }

    const [Inputs, setInputs] = useState([])
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`http://localhost:4000/appointments/${id}`)
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);

                setInputs(response.data)
            })
    }, [id])

    return (<>
        <div>
            <center><h1>Details of Appointments</h1></center>
            <hr/>
          
            <h4> Full Name : {Inputs.patientName}</h4>
            <h4>Doctor : {Inputs.doctorName}</h4>
            <h4>Appointment Date : {Inputs.appointmentDate}</h4>
            <h4>Time : {Inputs.appointmentTime}</h4>

           {/*  <div >
                <button style={b2_style} type="button"
                    onClick={() => navigate(`/StaffEdit/${Staffs.id}`)} >
                    Edit Patient
                </button>
            </div> */}

            <center><Button onClick={() => navigate(`/appointmentDisplay`)} >  Go Back to Appointment List</Button></center>
            
        </div>
    </>);
}
export default AppointmentView;