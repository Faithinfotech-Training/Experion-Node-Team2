import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Home from './Homepage';
import LoginForm from "./Login";
import RegisterUser from "./RegisterUser";
import RegisterStaff from "./RegisterStaff";
import RegisterPatient from "./RegisterPatient";
import RegisterMedicine from "./RegisterMedicine";
import PatientAppointment from "./PatientAppointment"
import About from "./About";
import NoMatch from "./NoMatch";

function App() {
  return (
    <>
      <MyRouter />
    </>
  );
};

function MyRouter() {
  return (
    <Router>
     <center> <h1 className="h">Clinic Management System</h1></center>
     {/*  <h3>Phasellus efficitur condimentum ipsum ut vestibulum.</h3> */}
      <div >
        <ul class="nav">
          <li className="list">
            <Link className="link" to="/">Home</Link>
          </li>
          <li className="list">
            <Link className="link" to="/userreg">Register</Link>
          </li >
          <li className="list">
            <Link className="link" to="/login">LogIn</Link>
          </li>
          <li className="list">
            <Link className="link" to="/staffreg">Register Staff</Link>
          </li>
          <li className="list">
            <Link className="link" to="/patientreg">Register Patient</Link>
          </li>
          <li className="list">
            <Link className="link" to="/medreg">Register Medicine</Link>
          </li>
          <li className="list">
            <Link className="link" to="/PatientAppointment">Patient Appointment</Link>
          </li >
          <li className="list">
          <Link className="link" to="/about">About Us</Link>
          </li>
        </ul>

      </div>
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/userreg" element={<RegisterUser />} />
        <Route path="/staffreg" element={<RegisterStaff />} />
        <Route path="/patientreg" element={<RegisterPatient />} />
        <Route path="/medreg" element={<RegisterMedicine />} />
        <Route path="/PatientAppointment" element={<PatientAppointment />} />
        <Route path="*" element={<NoMatch />}></Route>


      </Routes>

      <br /><br />
      <footer className="footer">copyright@clinicmanagement2021</footer>
    </Router>
  );
};

export default App;
