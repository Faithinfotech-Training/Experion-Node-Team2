import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap'

function Staff(props){
    return(
      <>
        <h4>Staff Name : {props.details.staffName}</h4>
        <Button>
        <Link className = "staffDetails" to = {`/staffdetails/${props.details.staffId}`}>View Details</Link>
        </Button>
        <br/>
      </>
    );
  };

  export default Staff;