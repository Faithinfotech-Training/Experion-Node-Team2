import { Link } from "react-router-dom";
import {Button, Card} from 'react-bootstrap'
import './admin.css';

function Staff(props){
    return(
      <>
        <Card className="text-center">
          <Card.Header> Staff Name : {props.details.staffName}</Card.Header>
          <Card.Body>
            <Card.Title> Staff Type : {props.details.staffType}</Card.Title>
            <Button>
            <Link className = "staffDetails" to = {`/staffdetails/${props.details.staffId}`}>View Details</Link>
            </Button>
          </Card.Body>
        </Card>
        <br/>
        <br/>
      </>
    );
  };

  export default Staff;