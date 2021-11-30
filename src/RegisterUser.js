import {useState} from 'react';
import axios from 'axios';

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
                <label className="label">User Name  </label>
                <div>
                    <input className="input" type = "email" name = "email" placeholder = "Enter your email"
                        value = {inputs.email || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label className="label">Password </label>
                <div>
                    <input className="input" type = "password" name = "password" placeholder = "Enter a strong password"
                        value = {inputs.password || ''} onChange = {handleChange}
                        required></input>
                </div> 
            </div>

            <div>
                <label className="label">Role </label>
                <div>
                    <select name = 'role' className="bld">
                        <option>Choose one</option>
                        <option value = 'admin'>Admin</option>
                        <option value = 'doctor'>Doctor</option>
                        <option value = 'frontoffice'>Front Office</option>
                        <option value = 'labtechnician'>Lab Technician</option>
                    </select>
                </div> 
                <br/>
            </div>

            <center>
            <input className="btn-submit" type = 'submit' ></input> &nbsp;
            <button className="btn-reset" onClick = {goToHome}>Cancel</button>
            </center>

        </form>
        </div>
        </>
    );

};
export default RegisterUser;