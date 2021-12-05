import { Link } from "react-router-dom";
import {Button, Card} from 'react-bootstrap'
import './admin.css';

function Event(props){
    return(
      <>
      <div className = "staffcards">
        <Card className="text-center">
          <Card.Header> Event Name : {props.details.eventName}</Card.Header>
          <Card.Body>
            <Card.Title> Description : {props.details.description}</Card.Title>
            <Button>
            <Link className = "staffDetails" to = {`/eventdetails/${props.details.id}`}>View Details</Link>
            </Button>
          </Card.Body>
        </Card>
        </div>
      </>
    );
  };

  export default Event;