import { Link } from "react-router-dom"
import {Button} from 'react-bootstrap'


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
                        
                            <Button >
                                <Link to={`/patientView/${props.details.patientId}`}>
                                    View Details
                                </Link>
                            </Button>
                    {'  '}

                        
                        
                            <Button variant="danger" >
                                <Link  to={`/PatientDelete/${props.details.patientId}`}>
                                    Delete Patient
                                </Link>
                            </Button>
                            {'    '}
                        
                        
                            <Button variant="secondary" >
                                <Link  to={`/billGenerate/${props.details.patientId}`}>
                                    Generate Bill
                                </Link>
                            </Button>
                    
                    </div>
                </div>
            </center>
        </>
    )
}
export default Patient;