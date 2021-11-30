import { useState } from 'react';
import axios from 'axios';



function PatientAppointment() {
    localStorage.clear();
    return (
        <>
            <center><h1>Patient Appointment</h1></center>
            <MyForm />
        </>
    );
}

function MyForm(props) {
    const [inputs, setInputs] = useState({});

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    };

    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs);

        axios.post(`http://localhost:4000/register`, inputs)
            .then(response => {
                localStorage.setItem('mytoken', response.data.accessToken)
            })
            .catch(error => {
                localStorage.clear();
                if (error.response) {
                    alert(error.response.data)  //=> response payload
                }
            })
    };

    function goToHome() {
        window.location = '/';
    }

    return (
        <>
        <div className="form">
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label className="label">Patient Name </label>
                    <div >
                        <input className="input" type="text" name="pat_name" placeholder="Enter patient name"
                            value={inputs.pat_name || ''} onChange={handleChange}
                            required></input>
                    </div>
                </div>

                <div>
                    <label className="label">Doctor Name </label>
                    <div >
                        <input className="input" type="text" name="doctor_name" placeholder="Enter doctor name"
                            value={inputs.doctor_name || ''} onChange={handleChange}
                            required></input>
                    </div>
                </div>

                <div>
                    <label className="label">Appointment Date </label>
                    <div >
                        <input className="input" type="date" name="appointment_date" placeholder="Enter amount"
                            value={inputs.appointment_date || ''} onChange={handleChange}
                            required></input>
                    </div>
                </div>

                <div>
                    <label className="label">Appointment Time  </label>
                    <div >
                        <input className="input" type="time" name="appointment_time" min="09:00" max="18.00"
                            value={inputs.appointment_time || ''} onChange={handleChange}
                            required></input>
                       
                    </div>
                </div>

                <center>
                <input className="btn-submit" type='submit' ></input> &nbsp;
                <button className="btn-reset" onClick={goToHome}>Cancel</button>
                </center>

            </form>
            </div>
        </>
    );

};
export default PatientAppointment;