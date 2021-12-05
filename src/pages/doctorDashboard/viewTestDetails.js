import {useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import Tests from './testList';
import roleController from "../../helpers/roleLogin/roleLogin";

function ViewTestDetails(){

    if(!roleController.isDoctor()){
        window.location = '/login'
      }

    const[tests, setTests]=useState([]);
    const {id}=useParams()
        useEffect(()=>{
                axios
                .get(`http://localhost:4000/reports/tests/${id}`)
                .then(response=>{
                    console.log('Promise was fullfilled')
                    console.log(response)
                    setTests(response.data)
                })},[id])
        

        return(<>
        <center><h2>Test Details</h2></center>
                 <div>{tests.map(test=><div key={test.id}> <Tests details={test}/></div>)}</div>
                 </>)
   
   }

export default ViewTestDetails;