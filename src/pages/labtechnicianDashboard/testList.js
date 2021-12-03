import {useState, useEffect} from 'react';
import axios from 'axios';
import Test from './test';

function TestList(){
    
    //Initialize the use state, to store data
    const [tests, setTests] = useState([]);

    //is loaded. eg: adds are only loaded after loading the components of page 
    useEffect(() => {
        
        axios.get('http://localhost:4000/tests') //gets data from api
          .then(response =>{
              console.log('Promise fullfilled'); //if data recieved, output 
              console.log(response);             //display output (responce)
              setTests(response.data); //save only 'data' in response to the state
          })
    },[]);
    
    return(
      <>
      <div>
        <center><h1>Lab Test List</h1></center>
        <ul>
            {tests.map(test => 
                    <li key = {test.testId}>
                        <Test details = {test}/>
                    </li>
                )}
        </ul>
      </div>
      </>
    );
};
  
export default TestList;