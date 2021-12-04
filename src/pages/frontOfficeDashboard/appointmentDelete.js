
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

//destructuring react to get only useState
function AppointmentDelete() {


    const [Inputs, setInputs] = useState([])
    const { id } = useParams()
    console.log(Inputs)

    useEffect(() => {

        axios.delete(`http://localhost:4000/appointments/${id}`)
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);

                setInputs(response.data)
                alert('Appointment cancelled')
               // window.location='/appointmentDisplay'
            })
    }, [id])

    return (<>
       
    </>);
}
export default AppointmentDelete;