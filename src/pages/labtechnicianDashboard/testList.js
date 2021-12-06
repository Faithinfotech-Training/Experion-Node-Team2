import {useState, useEffect} from 'react';
import axios from 'axios';
import Test from './test';
import roleController from '../../helpers/roleLogin/roleLogin';

function TestList(){
    
    if(!roleController.isLabtechnician()){
      window.location = '/login'
    }

    //Initialize the use state, to store data
    const [tests, setTests] = useState([]);

    //Initialize the use state for searching
    const [search, setSearch] = useState('')

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
      <div className = "cardsList">
        <center><h1>Lab Test List</h1></center>

        &nbsp;&nbsp;<input type='text' 
          name='search' placeholder='Search'
          onChange={event =>setSearch(event.target.value)} /><br/><br/>

        {tests.length === 0 ? (<h3>No Tests Available !</h3>) : ( 
          <div className = "staffCards">
          {tests.filter((test) => {
              if (search == ''){
                return test
              }
              else if (test.testName.toLowerCase().includes(search.toLowerCase())){
                return test
              }
            }).map(test => 
                <div key = {test.testId}>
                  <Test details = {test}/>
                </div>
              )}
          </div>
        )}
        
      </div>
      </>
    );
};
  
export default TestList;