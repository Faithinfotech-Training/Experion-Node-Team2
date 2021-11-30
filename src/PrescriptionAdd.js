import { useState } from 'react';
import axios from 'axios';

function PrescriptionAdd() {
    localStorage.clear();
    return (
        <>
            <center> <h1>Add Prescription </h1></center>
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
                        <div>
                            <input className="input" type="text" name="pat_name" placeholder="Enter patient name"
                                value={inputs.med_name || ''} onChange={handleChange}
                                required></input>
                        </div>
                    </div>

                    <div>
                        <label className="label">Age </label>
                        <div>
                            <input className="input" type="text" name="company_name" placeholder="Enter age"
                                value={inputs.company_name || ''} onChange={handleChange}
                                required></input>
                        </div>
                    </div>

                    <div>
                        <label className="label">Add Medicine </label>
                        <div>
                            <textarea id="medicine" name="medicine" rows="4" cols="50">
                                Add Medicines here
                            </textarea>
                        </div>
                    </div>

                    <div>
                        <label className="label">Add Lab Tests</label>
                        <div>
                        <textarea id="labtest" name="labtest" rows="4" cols="50">
                                Add Lab Tests here
                            </textarea>
                        </div>
                    </div>

                    <div>
                        <label className="label">Next Visit Time </label>
                        <div>
                            <input className="input" type="date" name="date_of_exp"
                                value={inputs.date_of_exp || ''} onChange={handleChange}
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
export default PrescriptionAdd;