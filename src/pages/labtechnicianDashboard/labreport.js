import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";
import "./labtechnician.css"

function LabReport(props){
    return(
      <>
      <div>
        <h4>Test Name : {props.details.testName}</h4>
        
        <Button variant = "primary" className = "viewDetails">
          <Link className = "labrepBut" to = {`/reportdetails/${props.details.labReportId}`}>View Details</Link>
        </Button>
        <br/>
        </div>
      </>
    );
  };

  export default LabReport;