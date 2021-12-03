import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

//destructuring react to get only useState
function AppointmentView() {

    var b_style = {
        background: 'grey',
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Arial',
        marginLeft: '25%',
        padding: 10,
        width: '50%',
        align: 'center',
        justifyContent: 'center'
    }
    var u_style = {
        listStyleType: 'none'
    }

    var di_style = {
        color: '#d1d8e0',
        margin: 30,
        backgroundColor: '#0fb9b1',
        fontSize: 20,
        width: 300,
        height: 40,
        borderRadius: 3,
    }

    var li_style = {
        textDecoration: 'none'
    }
    var b2_style = {
        color: 'black',
        margin: 30,
        backgroundColor: '#FF6666',
        fontSize: 20,
        width: 200,
        height: 40,
        borderRadius: 6,
        border: '2px solid white'
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
    }, [])

    return (<>
        <div style={b_style}>
            <h1>Details of Appointments</h1>
            <hr/>
          
            <h2> Full Name : {Inputs.patientName}</h2>
            <h2>Doctor : {Inputs.doctorName}</h2>
            <h2>Appointment Date : {Inputs.appointmentDate}</h2>
            <h2>Time : {Inputs.appointmentTime}</h2>

           {/*  <div >
                <button style={b2_style} type="button"
                    onClick={() => navigate(`/StaffEdit/${Staffs.id}`)} >
                    Edit Patient
                </button>
            </div> */}

            <button style={di_style}  onClick={() => navigate(`/appointmentDisplay`)} >  Go Back to Appointment List</button>
            
        </div>
    </>);
}
export default AppointmentView;