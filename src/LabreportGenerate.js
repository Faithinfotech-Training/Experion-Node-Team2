import { useState } from 'react';
import axios from 'axios';

function LabreportGenerate() {
    localStorage.clear();
    return (
        <>
            <center> <h1>Generate Report</h1></center>
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
                        <label className="label">Report ID </label>
                        <div>
                            <input className="input" type="number" name="report_id" placeholder="Enter report id"
                                value={inputs.report_id || ''} onChange={handleChange}
                                required></input>
                        </div>
                    </div>

                    <div>
                        <label className="label">Report Title </label>
                        <div>
                            <input className="input" type="text" name="report_title" placeholder="Enter report title"
                                value={inputs.report_title || ''} onChange={handleChange}
                                required></input>
                        </div>
                    </div>

                    <div>
                        <label className="label">Description</label>
                        <div>
                            <input className="input" type="text" name="desc" placeholder="Enter description"
                                value={inputs.desc || ''} onChange={handleChange}
                                required></input>
                        </div>
                    </div>

                    <div>
                        <label className="label">Report Date </label>
                        <div>
                            <input className="input" type="date" name="report_date"
                                value={inputs.report_date || ''} onChange={handleChange}
                                required></input>
                        </div>
                    </div>

                  
                    <label className="label">Add Report Files</label>
                    <input className="input" type="file" name="report_file" value={inputs.report_file || ''} onChange={handleChange}
                        required ></input>
                    <center>
                        <input className="btn-submit" type='submit' ></input> &nbsp;
                        <button className="btn-reset" onClick={goToHome}>Cancel</button>
                    </center>

                </form>
            </div>
        </>
    );

};
export default LabreportGenerate;