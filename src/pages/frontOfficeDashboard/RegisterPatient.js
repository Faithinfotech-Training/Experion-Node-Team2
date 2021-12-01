import {useState} from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function RegisterPatient(){
    localStorage.clear();
    return (
        <>
       <center> <h1>Register Patient</h1></center>
        <MyForm/>
        </>
    );
}

function MyForm(props){
    const [inputs, setInputs] = useState({});

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}))
    };

    function handleSubmit(event){
        event.preventDefault();
        console.log(inputs);

        axios.post(`http://localhost:4000/register`, inputs)
            .then(response => { 
                localStorage.setItem('mytoken', response.data.accessToken)         
            })
            .catch(error =>{
                localStorage.clear();
                if(error.response){
                    alert(error.response.data)  //=> response payload
                }
            })
    };

    function goToHome(){
        window.location = '/';
    }

    return(
        <>
        <div className="form">

        <Form onSubmit = {handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Full Name</Form.Label>
                <input className="input" type = "text" name = "full_name" placeholder = "Enter full name"
                        value = {inputs.full_name || ''} onChange = {handleChange} 
                        required></input>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date of Birth</Form.Label>
            <input className="input" type = "date" name = "date_of_birth"
                        value = {inputs.date_of_birth || ''} onChange = {handleChange}
                        required></input>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Gender</Form.Label><br/>
            <input type = "radio" name = "gender"
                        value = {inputs.gender || ''} onChange = {handleChange}
                        required></input>
                    <label className="rdo">Male</label> &nbsp;&nbsp;
                    <input type = "radio" name = "gender"
                        value = {inputs.gender || ''} onChange = {handleChange}
                        required></input>
                    <label className="rdo">Female</label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Address</Form.Label>
            <input className="input" type = "text" name = "address" placeholder = "Enter Address"
                        value = {inputs.address || ''} onChange = {handleChange} 
                        required></input>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Blood Group</Form.Label>
                <select name = 'bloodgroup' className="bld" >
                    <option>Choose one</option>
                    <option value = 'a+'>A+</option>
                    <option value = 'a-'>A-</option>
                    <option value = 'b+'>B+</option>
                    <option value = 'b-'>B-</option>
                    <option value = 'o+'>O+</option>
                    <option value = 'o-'>O-</option>
                    <option value = 'ab+'>AB+</option>
                    <option value = 'ab-'>AB-</option>
                </select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Phone</Form.Label>
            <input className="input" type = "text" name = "phoneno" placeholder = "Enter phone number"
                        value = {inputs.phoneno || ''} onChange = {handleChange} 
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
export default RegisterPatient;