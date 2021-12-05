import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Patient from "./patient";
import roleController from "../../helpers/roleLogin/roleLogin";

//destructuring react to get only useState
function PatientDisplay() {

    if(!roleController.isFrontoffice()){
        window.location = '/login'
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
        <div >
          <center>  <h1>Registered Patient List</h1></center><br/>
            <div >
                <div>
                    <ul >
                        {inputs.map(patient =>
                            <li key={patient.patientId} >
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