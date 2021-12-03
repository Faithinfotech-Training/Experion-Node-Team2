import React from "react"
import {useState,useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router";

function TestDetails(){
    const[tests, setTests]=useState([]);
    const {id}=useParams()
    
    useEffect(()=>{
        axios
        .get(`http://localhost:4000/results/${id}`)
        .then(response=>{
            console.log('Promise was fullfilled')
            console.log(response)
            setTests(response.data)
        })},[id])
        

        return(<>
        <h2>Test Details</h2>
        
        <div>
        <h3> Test Name : {tests.testName}</h3>
        <h3> Discription: {tests.description}</h3>
        <h3> Desired Range :{tests.desiredRange}</h3>
        <h3> Result Value :{tests.resultValue} </h3>
        <h3> Remark :{tests.remarks} </h3>

      
        <a href="/appointmentlist">Go Back</a>
        </div>
        </>)}

   
export default TestDetails;