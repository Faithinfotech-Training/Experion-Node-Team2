import { Link } from "react-router-dom"
import {Button} from 'react-bootstrap'

function Appointment(props) {

    console.log(props)
    return (
        <>
            <center>
                <div>
                    <div >
<br/>
                        <h3>  Name : {props.details.patientName}</h3>
                       
                    </div>
                    <div  >
                        <div>
                            <Button>
                                <Link to={`/appointmentView/${props.details.id}`}>
                                    View
                                </Link>
                            </Button>
                                {'  '}
                            <Button variant = "danger">
                                <Link to={`/appointmentDelete/${props.details.id}`}>
                                    Cancel
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}
export default Appointment;