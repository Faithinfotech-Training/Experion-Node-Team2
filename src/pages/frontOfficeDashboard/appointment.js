import { Link } from "react-router-dom"


function Appointment(props) {
    var di_style = {

        margin: 30,
        backgroundColor: '#87CEFA',
        fontSize: 20,
        width: 230,
        height: 60,
        borderRadius: 6,
        border: '2px solid white',
        color: 'white'


    }

    var link_style = {
        textDecoration: 'none',

    }
    var b2_style = {
        color: 'black',
        margin: 30,
        backgroundColor: '#D3D3D3',
        fontSize: 20,
        width: 200,
        height: 40,
        borderRadius: 6,
        border: '2px solid white'
    }
    var d_style = {
        display: 'flex',
        justifyContent: 'center',
        background: '#A0A0A0',
        color: 'black',
        fontSize: 20,
        border: '2px solid white',
        magin: 30,
        width: '95%'


    }
    var n_style = {
        display: 'block'

    }
    var h_style = {
        display: 'flex',

    }
    console.log(props)
    return (
        <>
            <center>
                <div style={d_style}>
                    <div >
<br/>
                        <h3 style={h_style}>  Name : {props.details.patientName}</h3>
                       
                    </div>
                    <div style={n_style} >
                        <div>
                            <button style={di_style}>
                                <Link style={link_style} to={`/appointmentView/${props.details.id}`}>
                                    View Appointment Details
                                </Link>
                            </button>
                        </div>

                        
                        <div >
                            <button style={b2_style}>
                                <Link style={link_style} to={`/appointmentDelete/${props.details.id}`}>
                                    Cancel Appointment
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </center>
        </>
    )
}
export default Appointment;