import { Link } from "react-router-dom";
function Staff(props){
    return(
      <>
        <h4>First Name : {props.details.staffName}</h4>
        <Link className = "staffDetails" to = {`/staffdetails/${props.details.staffId}`}>View Details</Link>
      </>
    );
  };

  export default Staff;