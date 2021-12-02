
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

//destructuring react to get only useState
function PatientDelete() {

    var b_style = {
        background: 'black',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Arial',
        margin: 30,
        padding: 10
    }
    var u_style = {
        listStyleType: 'none'
    }


    const [Inputs, setInputs] = useState([])
    const { patientId } = useParams()

    useEffect(() => {

        axios.delete(`http://localhost:4000/patients/${patientId}`)
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);

                setInputs(response.data)
                window.location='/patientDisplay'
            })
    }, [])

    return (<>
       
    </>);
}
export default PatientDelete;