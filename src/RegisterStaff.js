import {useState} from 'react';
import axios from 'axios';

function RegisterStaff(){
    localStorage.clear();
    return (
        <>
        <h1>Register Staff</h1>
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
                <label className="label">Qualification </label>
                <div>
                    <input className="input" type = "text" name = "qualification" placeholder = "Enter qualification"
                        value = {inputs.qualification || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>
                
            <div>
                <label className="label">Gender </label><br/>
                <div>
                    <input type = "radio" name = "gender"
                        value = {inputs.gender || ''} onChange = {handleChange}
                        required></input>
                    <label className="rdo">Male</label>
                    <input type = "radio" name = "gender"
                        value = {inputs.gender || ''} onChange = {handleChange}
                        required></input>
                    <label className="rdo">Female</label>
                </div> <br/>
            </div>

            <div>
                <label className="label">Date of Birth </label>
                <div>
                    <input className="input" type = "date" name = "date_of_birth"
                        value = {inputs.date_of_birth || ''} onChange = {handleChange}
                        required></input>
                </div> 
            </div>   

            <div>
                <label className="label">Staff Type </label>
                <div>
                    <select name = 'stafftype' className="bld">
                        <option>Choose one</option>
                        <option value = 'admin'>Admin</option>
                        <option value = 'doctor'>Doctor</option>
                        <option value = 'frontoffice'>Front Office</option>
                        <option value = 'labtechnician'>Lab Technician</option>
                    </select>
                </div> 
                <br/>
            </div>

            <div>
                <label className="label">Address </label>
                <div>
                    <input className="input" type = "text" name = "address" placeholder = "Enter Address"
                        value = {inputs.address || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label className="label">Date of Join </label>
                <div>
                    <input className="input" type = "date" name = "date_of_join"
                        value = {inputs.date_of_join || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label className="label">Phone </label>
                <div>
                    <input className="input" type = "text" name = "phoneno" placeholder = "Enter phone number"
                        value = {inputs.phoneno || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label className="label">Experience </label>
                <div>
                    <input className="input" type = "text" name = "experience" placeholder = "Enter experience"
                        value = {inputs.experience || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <div>
                <label className="label"> Email </label>
                <div>
                    <input className="input" type = "email" name = "email" placeholder = "Enter email"
                        value = {inputs.email || ''} onChange = {handleChange} 
                        required></input>
                </div> 
            </div>

            <input className="btn-submit" type = 'submit' ></input> &nbsp;
            <button className="btn-reset" onClick = {goToHome}>Cancel</button>
        </form>
        </div>
        </>
    );

};
export default RegisterStaff;