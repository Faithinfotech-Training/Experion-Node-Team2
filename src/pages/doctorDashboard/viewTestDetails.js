import {useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import Tests from './testList'

function ViewTestDetails(){
    const[tests, setTests]=useState([]);
    const {id}=useParams()
        useEffect(()=>{
                axios
                .get(`http://localhost:5000/results/tests/${id}`)
                .then(response=>{
                    console.log('Promise was fullfilled')
                    console.log(response)
                    setTests(response.data)
                })},[id])
        

        return(<>
        <h2>TESTS DETAILS</h2>
                 <div>{tests.map(test=><div key={test.id}> <Tests details={test}/></div>)}</div>
                 </>)
   
   }

export default ViewTestDetails;