import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Appointment from "./appointment";
import roleController from "../../helpers/roleLogin/roleLogin";


//destructuring react to get only useState
function AppointmentDisplay() {

    if(!roleController.isFrontoffice()){
        window.location = '/login'
      }

    const [inputs, setInputs] = useState([])

    useEffect(() => {
        console.log('the use effect hook has been executed');
        axios.get('http://localhost:4000/appointments')
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);

                setInputs(response.data)
            })
    }, [])

    return (<>
        <div>
            <center><h1>Appointments</h1></center><br/>
            <div >
                <div>
                    <ul >
                        {inputs.map(appointment =>
                            <li key={appointment.id} >
                                <Appointment details={appointment} />
                            </li>
                        )}

                    </ul>


                </div>
            </div>
            <hr />
        </div>
    </>);
}
export default AppointmentDisplay;