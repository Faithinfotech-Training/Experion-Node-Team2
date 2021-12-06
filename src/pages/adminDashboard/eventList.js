import {useState, useEffect} from 'react';
import axios from 'axios';
import Event from './event';
import roleController from '../../helpers/roleLogin/roleLogin';
import './admin.css';


function EventList(){
    
    if(!roleController.isAdmin()){
      window.location = '/login'
    }

    //Initialize the use state, to store data
    const [staffs, setStaffs] = useState([]);

    //Only fetch the data after some time, after every other component
    //is loaded. eg: adds are only loaded after loading the components of page 
    useEffect(() => {
        
        axios.get('http://localhost:4000/events') //gets data from api
          .then(response =>{
              console.log('Promise fullfilled'); //if data recieved, output 
              console.log(response);             //display output (responce)
              setStaffs(response.data); //save only 'data' in response to the state
          })
    },[]);
    
    return(
      <>
      <div>
        <center><h1>Event List</h1></center>

        {staffs.length === 0 ? (<h3>No Events Available !</h3>) : ( 
          <div className = "staffCards">
          {staffs.map(staff => 
                  <div key = {staff.id}>
                      <Event details = {staff}/>
                  </div>
              )}
      </div>
      )}
      </div>
      </>
    );
};
  
export default EventList;