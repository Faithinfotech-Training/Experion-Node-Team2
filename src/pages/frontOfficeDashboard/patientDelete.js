
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

//destructuring react to get only useState
function PatientDelete() {

    const [Inputs, setInputs] = useState([])
    const { patientId } = useParams()
    console.log(Inputs)
    useEffect(() => {

        axios.delete(`http://localhost:4000/patients/${patientId}`)
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response)
                setInputs(response.data)
                alert('patient removed successfully')
                window.location='/patientDisplay'
            })
    }, [patientId])

    return (<>
       
    </>);
}
export default PatientDelete;