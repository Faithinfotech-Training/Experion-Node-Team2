import {useState} from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function MedicineForm(){
    const [inputs, setInputs] = useState({});

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}))
    };

    function handleSubmit(event){
        event.preventDefault();
        console.log(inputs);

        axios.post(`http://localhost:4000/medicines`, inputs)
         .then(response=>{
            console.log('Promise was fullfilled')
            console.log(response)
            alert("Added Test ! Re-enter to add more !")

            })
    };

    return(
        <>
        <center><h2>Medicine</h2></center>
        <div className="form">

        <Form onSubmit = {handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Patient Id</Form.Label>
                <input className="input" type = "number" name = "patientid" placeholder = "Enter Patient Id"
                        value = {inputs.patientid || ''} onChange = {handleChange} 
                        required></input>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Medicine Name</Form.Label>
                <input className="input" type = "text" name = "medicineName" placeholder = "Enter Medicine Name"
                        value = {inputs.medicineName || ''} onChange = {handleChange} 
                        required></input>
            </Form.Group>

            
            <Form.Group className="mb-3">
            <Form.Label>Unit</Form.Label>
                <select name = 'unit' className="bld" value = {inputs.unit || ''} onChange = {handleChange}
                        required>
                    <option>Choose one</option>
                    <option value = 'mg'>MG</option>
                    <option value = 'ml'>ML</option>
                    </select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Dose</Form.Label>
            <input className="input" type = "text" name = "dose"
                        value = {inputs.dose || ''} onChange = {handleChange}
                        required></input>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Type</Form.Label>
            <input className="input" type = "text" name = "type"
                        value = {inputs.type || ''} onChange = {handleChange}
                        required></input>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Day</Form.Label>
            <input className="input" type = "text" name = "day" placeholder = "Number of Days"
                        value = {inputs.day || ''} onChange = {handleChange} 
                        required></input>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Comments</Form.Label>
            <input className="input" type = "text" name = "comment"
                        value = {inputs.comment || ''} onChange = {handleChange} 
                        required></input>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date of Medicine</Form.Label>
            <input className="input" type = "date" name = "dateMedicine"
                        value = {inputs.dateMedicine || ''} onChange = {handleChange} 
                        required></input>
            </Form.Group>
            <center>
            <Button variant="primary" type="submit">ADD</Button>
            </center>
            </Form>
            </div>
            </>)
        }
export default MedicineForm;