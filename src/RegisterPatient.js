import {useState} from 'react';
import axios from 'axios';

function RegisterPatient(){
    localStorage.clear();
    return (
        <>
       <center> <h1>Register Staff</h1></center>
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
        <form onSubmit = {handleSubmit}>
        <div>
                <label className="label">Full Name </label>
                <div>
                    <input className="input" type = "text" name = "full_name" placeholder = "Enter full name"
                        value = {inputs.full_name || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label  className="label">Date of Birth </label>
                <div>
                    <input className="input"  type = "date" name = "date_of_birth"
                        value = {inputs.date_of_birth || ''} onChange = {handleChange}
                        required></input>
                </div> 
            </div>   

            <div>
                <label  className="label">Gender </label><br/>
                <div>
                    <br/>
                    <input  type = "radio" name = "gender"
                        value = {inputs.gender || ''} onChange = {handleChange}
                        required></input>
                    <label className="rdo" >Male</label>
                    <input  type = "radio" name = "gender"
                        value = {inputs.gender || ''} onChange = {handleChange}
                        required></input>
                    <label className="rdo" >Female</label>
                </div> 
            </div><br/>

            <div>
                <label  className="label">Address </label>
                <div>
                    <input className="input"  type = "text" name = "address" placeholder = "Enter Address"
                        value = {inputs.address || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label  className="label">Phone </label>
                <div>
                    <input className="input"  type = "text" name = "phoneno" placeholder = "Enter phone number"
                        value = {inputs.phoneno || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label  className="label">Blood Group </label>
                <div>
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
                </div> 
            </div>
            <br/>

            <center>
            <input className="btn-submit" type = 'submit' ></input> &nbsp;
            <button className="btn-reset" onClick = {goToHome}>Cancel</button>
            </center>

        </form>
        </div>
        </>
    );

};
export default RegisterPatient;