import {useState, useEffect} from 'react';
import axios from 'axios';
import LabReport from './labreport';
import "./labtechnician.css";
import roleController from '../../helpers/roleLogin/roleLogin';

function LabReportList(){
    
    if(!roleController.isLabtechnician()){
      window.location = '/login'
    }

    //Initialize the use state, to store data
    const [tests, setTests] = useState([]);

    //is loaded. eg: adds are only loaded after loading the components of page 
    useEffect(() => {
        axios.get('http://localhost:4000/reports') //gets data from api
          .then(response =>{
              console.log('Promise fullfilled'); //if data recieved, output 
              console.log(response);             //display output (responce)
              setTests(response.data); //save only 'data' in response to the state
          })
    },[]);


    
    return(
      <>
      <div className = "cardsList">
        <center><h1>Lab Reports</h1></center>
        <div>
            {tests.map(tests => 
                    <div key = {tests.labReportId}>
                        <LabReport details = {tests}/>
                    </div>
                )}
        </div>
      </div>
      </>
    );
};
  
export default LabReportList;