import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {Button} from 'react-bootstrap'

//because we are using parameter in URL to catch the details
import { useNavigate } from 'react-router-dom';

function TestDetails(){
    
    //Initialize the use state, to store data
    const [test, setTest] = useState([]);
    //get id from URL for fetching
    const {testId} = useParams();
    console.log(testId)
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:4000/tests/${testId}`) //gets data from test
          .then(response =>{
              console.log('Promise fullfilled');
              console.log(response);             
              setTest(response.data);
          })
    },[testId]);
    
    const [patient, setPatient] = useState([]);
    useEffect(() => {
     setTimeout(() => {
      axios.get(`http://localhost:4000/patients/${test.patientId}`) //gets data from test
        .then(response =>{
            console.log('Promise fullfilled');
            console.log(response);             
            setPatient(response.data);
        })
      },100);
  },[test.patientId]);
    
    return(
      <>
      <div>
        <center><h1>Test Details</h1></center>
        <h4>Test Name : {test.testName}</h4>
        <h4>Description : {test.description}</h4>
        <h4>Patient Name : {patient.patientName}</h4>

        <center>
        <Button variant = "primary" type ='button' onClick = {() =>navigate(`/generatereport/${test.testId}`)}>Begin test</Button>
        &nbsp;&nbsp;
        </center>
        <br/><br/> 
        <a href = '/testList'>Go back to test list</a>
      </div>
      </>
    );
};

export default TestDetails;
