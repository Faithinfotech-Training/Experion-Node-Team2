import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";

import Home from './pages/home/index';
import LoginForm from "./pages/login/index";
import RegisterUser from "./pages/adminDashboard/RegisterUser";
import RegisterStaff from "./pages/adminDashboard/RegisterStaff";
import RegisterPatient from "./pages/frontOfficeDashboard/RegisterPatient";
import RegisterMedicine from "./pages/frontOfficeDashboard/RegisterMedicine";
import PatientAppointment from "./pages/frontOfficeDashboard/PatientAppointment";
import Appointments from "./pages/doctorDashboard/AppointmentList";
import PatientDetails from "./pages/doctorDashboard/PatientDetails";
import About from "./pages/about/index";
import NoMatch from "./pages/noMatch/index";
import PrescriptionAdd from "./pages/doctorDashboard/PrescriptionAdd";
import LabreportGenerate from "./pages/labtechnicianDashboard/LabreportGenerate";


function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous"/>
      <MyRouter />
    </>
  );
};

function MyRouter() {
  return (
    <>
    <Router>
    <center>
        <h1 className="h">Clinic Management System</h1>
        <h2>Phasellus efficitur condimentum ipsum ut vestibulum.</h2>
     </center>
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">CMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="link" to="/">Home</Link>
              <Link className="link" to="/userreg">Register</Link>
              <Link className="link" to="/login">Log In</Link>
              <Link className="link" to="/staffreg">Register Staff</Link>
              <Link className="link" to="/patientreg">Register Patient</Link>
              <Link className="link" to="/medreg">Register Medicine</Link>
              <Link className="link" to="/patientappoint">Patient Appointment</Link>
              <Link className="link" to="/appointmentlist">Appoinment List</Link>
              <Link className="link" to="/PrescriptionAdd">Add Prescription</Link>
              <Link className="link" to="/labreportGenerate">Generate Report</Link>
              <Link className="link" to="/about">About Us</Link>
            </Nav>
          </Navbar.Collapse>
       </Container>
    </Navbar>
    
      <br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/userreg" element={<RegisterUser />} />
        <Route path="/staffreg" element={<RegisterStaff />} />
        <Route path="/patientreg" element={<RegisterPatient />} />
        <Route path="/medreg" element={<RegisterMedicine />} />
        <Route path="/patientappoint" element={<PatientAppointment />} />
        <Route path="/appointmentlist" element={<Appointments />} />
        <Route path="/patientdetails/:id" element={<PatientDetails />} />
        <Route path="/PrescriptionAdd" element={<PrescriptionAdd/>}/>
        <Route path="/LabreportGenerate" element={<LabreportGenerate/>}/>
        <Route path="*" element={<NoMatch />}></Route>

      </Routes>

      <br /><br />
      <footer className="footer">copyright@clinicmanagement2021</footer>
    </Router>
    </>
  );
};

export default App;
