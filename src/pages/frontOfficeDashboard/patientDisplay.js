import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Patient from "./patient";

//destructuring react to get only useState
function PatientDisplay() {

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
        axios.get('http://localhost:4000/patients')
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);

                setInputs(response.data)
            })
    }, [])

    return (<>
        <div style={b_style}>
            <h1>Registered Patient List</h1><br/>
            <div >
                <div>
                    <ul >
                        {inputs.map(patient =>
                            <li style={u_style} key={patient.patientId} >
                                <Patient details={patient} />
                            </li>
                        )}

                    </ul>


                </div>
            </div>
            <hr />
        </div>
    </>);
}
export default PatientDisplay;