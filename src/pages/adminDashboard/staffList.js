import {useState, useEffect} from 'react';
import axios from 'axios';
import Staff from './staff';


function StaffList(){
    
    //Initialize the use state, to store data
    const [staffs, setStaffs] = useState([]);

    //Only fetch the data after some time, after every other component
    //is loaded. eg: adds are only loaded after loading the components of page 
    useEffect(() => {
        
        axios.get('http://localhost:4000/staffs') //gets data from api
          .then(response =>{
              console.log('Promise fullfilled'); //if data recieved, output 
              console.log(response);             //display output (responce)
              setStaffs(response.data); //save only 'data' in response to the state
          })
    },[]);
    
    return(
      <>
      <div>
        <center><h1>Staff List</h1></center>
        <div className = "staffCards">
            {staffs.map(staff => 
                    <div key = {staff.staffId}>
                        <Staff details = {staff}/>
                    </div>
                )}
        </div>

      </div>
      </>
    );
};
  
export default StaffList;