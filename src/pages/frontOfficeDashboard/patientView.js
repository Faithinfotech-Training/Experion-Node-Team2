import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

//destructuring react to get only useState
function PatientView() {


    const [Inputs, setInputs] = useState([])
    const { patientId } = useParams()
    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`http://localhost:4000/patients/${patientId}`)
            .then(response => {
                console.log('Promise fullfilled');
                console.log(response);

                setInputs(response.data)
            })
    }, [patientId])

    return (<>
        <div>
            <h1>Staff List</h1>
            <hr/>
            <h1>Deatils of {Inputs.patientName}</h1>
            <h2> First Name : {Inputs.patientName}</h2>
            <h2>Date of birth : {Inputs.dateOfBirth}</h2>
            <h2>Address : {Inputs.address}</h2>
            <h2>Phone Number : {Inputs.phoneNumber}</h2>

            <div >
                <button type="button"
                    onClick={() => navigate(`/patientEdit/${Inputs.patientId}`)} >
                    Edit Patient details
                </button>
            </div> 

            <button> <a href="/patientDisplay"> Go Back to Patient List</a></button>
            
        </div>
    </>);
}
export default PatientView;