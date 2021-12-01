import {useState} from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function RegisterUser(){
    localStorage.clear();
    return (
        <>
       <center> <h1>Register User</h1></center>
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <input className="input" type = "email" name = "email" placeholder = "Enter your email"
                        value = {inputs.email || ''} onChange = {handleChange} 
                        required></input>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <input className="input" type = "password" name = "password" placeholder = "Enter a strong password"
                        value = {inputs.password || ''} onChange = {handleChange}
                        required></input>
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
                <select name = 'role' className="bld">
                    <option>Choose one</option>
                    <option value = 'admin'>Admin</option>
                    <option value = 'doctor'>Doctor</option>
                    <option value = 'frontoffice'>Front Office</option>
                    <option value = 'labtechnician'>Lab Technician</option>
                </select>
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
export default RegisterUser;