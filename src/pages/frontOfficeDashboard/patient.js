import { Link } from "react-router-dom"


function Patient(props) {

    console.log(props)
    return (
        <>
            <center>
                <div >
                    <div >
<br/>
                        <h3 > Full Name : {props.details.patientName}</h3>
                       
                    </div>
                    <div>
                        <div>
                            <button>
                                <Link to={`/patientView/${props.details.patientId}`}>
                                    View Details
                                </Link>
                            </button>
                        </div>

                        
                        <div >
                            <button >
                                <Link  to={`/PatientDelete/${props.details.patientId}`}>
                                    Delete Patient
                                </Link>
                            </button>
                        </div>
                        <div >
                            <button >
                                <Link  to={`/billGenerate/${props.details.patientId}`}>
                                    Generate Bill
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}
export default Patient;