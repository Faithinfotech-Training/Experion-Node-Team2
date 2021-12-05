import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import {useParams} from 'react-router';
import roleController from '../../helpers/roleLogin/roleLogin';


function PatientAppointment() {
    return (
        <>
            <center><h1>Patient Appointment</h1></center>
            <MyForm />
        </>
    );
}

function MyForm(props) {

    if(!roleController.isFrontoffice()){
        window.location = '/login'
      }

    const[inputs, setInputs]=useState([]);
    const {patientId}=useParams()
    console.log(patientId)
    useEffect(()=>{
        axios
        .get(`http://localhost:4000/patients/${patientId}`)
        .then(response=>{
            console.log('Promise was fullfilled')
            console.log(response)
            setInputs(response.data)

        })},[patientId])


    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs);

        axios.post(`http://localhost:4000/appointments`, inputs)
            .then(response => {
               // localStorage.setItem('mytoken', response.data.accessToken)
               setInputs(response.data);
               alert('Appointment confirmed');
               window.location='/appointmentDisplay'
            })
           /*  .catch(error => {
                localStorage.clear();
                if (error.response) {
                    alert(error.response.data)  //=> response payload
                }
            }) */
    };

    function goToHome() {
        window.location = '/';
    }


    return (
        <>
        <div className="form">

        <Form onSubmit = {handleSubmit}>

        <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Patient ID</Form.Label>
                <input className="input" type="text" name="patientId" placeholder="Enter patient name"
                            value={inputs.patientId || ''} onChange={handleChange}
                            required></input>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Patient Name</Form.Label>
                <input className="input" type="text" name="patientName" placeholder="Enter patient name"
                            value={inputs.patientName || ''} onChange={handleChange}
                            required></input>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Doctor Name</Form.Label>
                <input className="input" type="text" name="doctorName" placeholder="Enter doctor name"
                            value={inputs.doctorName || ''} onChange={handleChange}
                            required></input>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Appointment Date</Form.Label>
            <input className="input" type="date" name="appointmentDate" 
                            value={inputs.appointmentDate || ''} onChange={handleChange}
                            required></input>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTime">
            <Form.Label>Appointment Time</Form.Label>
            <input className="input" type="time" name="appointmentTime" min="09:00" max="18.00"
                            value={inputs.appointmentTime || ''} onChange={handleChange}
                            required></input>
            </Form.Group>

            <center>
            <Button variant="primary" type="submit">Submit</Button>&nbsp;&nbsp;
            <Button variant="danger" onClick = {goToHome} >Cancel</Button>
            </center>

        </Form>

            </div>
        </>
    );

};
export default PatientAppointment;