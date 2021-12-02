import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Appointment from "./appointment";

//destructuring react to get only useState
function AppointmentDisplay() {

    var b_style = {
        background: '#707070',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Arial',
        padding: 10
    }
    var u_style = {
        listStyleType: 'none'
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
        <div style={b_style}>
            <h1>Appointments</h1><br/>
            <div >
                <div>
                    <ul >
                        {inputs.map(appointment =>
                            <li style={u_style} key={appointment.id} >
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