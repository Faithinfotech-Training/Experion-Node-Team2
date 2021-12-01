import {useState} from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

function RegisterMedicine(){
    localStorage.clear();
    return (
        <>
     <center> <h1>Register Medicine</h1></center>  
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
                <Form.Label>Medicine Name</Form.Label>
                <input className="input" type = "text" name = "med_name" placeholder = "Enter medicine name"
                        value = {inputs.med_name || ''} onChange = {handleChange} 
                        required></input>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Medicine Company</Form.Label>
                <input className="input" type = "text" name = "company_name" placeholder = "Enter company name"
                        value = {inputs.company_name || ''} onChange = {handleChange} 
                        required></input>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Amount</Form.Label>
                <input className="input" type = "text" name = "amount" placeholder = "Enter amount"
                        value = {inputs.amount || ''} onChange = {handleChange} 
                        required></input>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Manufacture Date</Form.Label>
            <input className="input" type = "date" name = "date_of_manu"
                        value = {inputs.date_of_manu || ''} onChange = {handleChange}
                        required></input>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Expiry Date</Form.Label>
            <input className="input" type = "text" name = "dosage" placeholder = "Enter dosage"
                        value = {inputs.dosage || ''} onChange = {handleChange} 
                        required></input>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Medicine Dosage</Form.Label>
                <input className="input" type = "text" name = "dosage" placeholder = "Enter dosage"
                        value = {inputs.dosage || ''} onChange = {handleChange} 
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
export default RegisterMedicine;