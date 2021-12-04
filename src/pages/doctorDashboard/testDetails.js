import React from "react"
import {useState,useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router";

function TestDetails(){
    const[tests, setTests]=useState([]);
    const {id}=useParams()
    
    useEffect(()=>{
        axios
        .get(`http://localhost:4000/reports/${id}`)
        .then(response=>{
            console.log('Promise was fullfilled')
            console.log(response)
            setTests(response.data)
        })},[id])
        

       /* return(<>
        <h2>Test Details</h2>
        
        <div>
        <h3> Test Name : {tests.testName}</h3>
        <h3> Discription: {tests.description}</h3>
        <h3> Desired Range :{tests.desiredRange}</h3>
        <h3> Result Value :{tests.resultValue} </h3>
        <h3> Remark :{tests.remarks} </h3>

      
        <a href="/appointmentlist">Go Back</a>
        </div>
       </>)*/

       return(
        <Card className="text-center">
        <Card.Header>Test Details</Card.Header>
        <Card.Body>
          <Card.Title> Test Name : {tests.testName}</Card.Title>
          <Card.Title> Discription: {tests.description}</Card.Title>
          <Card.Title> Desired Range :{tests.desiredRange}</Card.Title>
          <Card.Title> Result Value :{tests.resultValue}</Card.Title>
          <Card.Title> Remark :{tests.remarks} </Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted"><a href="/appointmentlist">Go Back</a></Card.Footer>
      </Card>

      )
    
    }

   
export default TestDetails;