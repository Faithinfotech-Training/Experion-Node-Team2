import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./app.css";

import Home from './pages/home/index';
import LoginForm from "./pages/login/index";
import RegisterUser from "./pages/adminDashboard/registerUser";
import RegisterStaff from "./pages/adminDashboard/registerStaff";
import RegisterPatient from "./pages/frontOfficeDashboard/RegisterPatient";
import RegisterMedicine from "./pages/frontOfficeDashboard/registerMedicine";
import PatientAppointment from "./pages/frontOfficeDashboard/PatientAppointment";
import Appointments from "./pages/doctorDashboard/appointmentList";
import PatientDetails from "./pages/doctorDashboard/patientDetails";
import About from "./pages/about/index";
import NoMatch from "./pages/noMatch/index";
import PrescriptionAdd from "./pages/doctorDashboard/prescriptionAdd";
import LabreportGenerate from "./pages/labtechnicianDashboard/labreportGenerate";
import StaffList from "./pages/adminDashboard/staffList";
import StaffDetails from "./pages/adminDashboard/staffDetails";
import StaffEdit from "./pages/adminDashboard/staffEdit";

import roleController from "./helpers/roleLogin/roleLogin";
import PatientDisplay from "./pages/frontOfficeDashboard/patientDisplay";
import PatientView from "./pages/frontOfficeDashboard/patientView";
import PatientDelete from "./pages/frontOfficeDashboard/patientDelete";
import PatientEdit from "./pages/frontOfficeDashboard/patientEdit";
import BillGenerate from "./pages/frontOfficeDashboard/billGenerate";
import AppointmentDisplay from "./pages/frontOfficeDashboard/appointmentDisplay";
import AppointmentView from "./pages/frontOfficeDashboard/appointmentView";
import AppointmentDelete from "./pages/frontOfficeDashboard/appointmentDelete";

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
              {!localStorage.getItem('mytoken') && <Link className="link" to="/userreg">Register User</Link>}
              {!localStorage.getItem('mytoken') && <Link className="link" to="/login">Log In</Link>}
              {roleController.isAdmin() && <Link className="link" to="/staffreg">Register Staff</Link>}
              {roleController.isAdmin() && <Link className="link" to="/stafflist">Staff List</Link>}
              {roleController.isLabtechnician() && <Link className="link" to="/testlist">LabTest List</Link>}
              {roleController.isFrontoffice() && <Link className="link" to="/registerPatient">Register Patient</Link>}
              {roleController.isFrontoffice() && <Link className="link" to="/patientDisplay">Registered Patient List</Link>}
              {roleController.isFrontoffice() && <Link className="link" to="/patientappoint">Patient Appointment</Link>}
              {roleController.isFrontoffice() && <Link className="link" to="/appointmentDisplay">Appointment List</Link>}
              {roleController.isDoctor() && <Link className="link" to="/appointmentlist">Consultation List</Link>}
              {roleController.isDoctor() && <Link className="link" to="/PrescriptionAdd">Add Prescription</Link>}
              {roleController.isLabtechnician() && <Link className="link" to="/labreportGenerate">Generate Report</Link>}
              <Link className="link" to="/about">About Us</Link>
              {localStorage.getItem('mytoken') && <div><Link className = "link" onClick={ () => window.location = '/login'} to="/login">Logout</Link></div>}
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
        <Route path="/registerPatient" element={<RegisterPatient />} />
        <Route path="/patientDisplay" element={<PatientDisplay />} />
        <Route path="/patientView/:patientId" element={<PatientView />} />
        <Route path="/patientDelete/:patientId" element={<PatientDelete />} />
        <Route path="/patientEdit/:patientId" element={<PatientEdit />} />
        <Route path="/billGenerate/:patientId" element={<BillGenerate />} />
        <Route path="/appointmentDisplay" element={<AppointmentDisplay />} /> 
        <Route path="/appointmentView/:id" element={<AppointmentView />} />
        <Route path="/appointmentDelete/:id" element={<AppointmentDelete />} />
        <Route path="/medreg" element={<RegisterMedicine />} />
        <Route path="/patientAppointment" element={<PatientAppointment />} />
        <Route path="/appointmentlist" element={<Appointments />} />
        <Route path="/patientdetails/:id" element={<PatientDetails />} />
        <Route path="/PrescriptionAdd" element={<PrescriptionAdd/>}/>
        <Route path="/LabreportGenerate" element={<LabreportGenerate/>}/>
        <Route path="/stafflist" element={<StaffList/>}/>
        <Route path="/staffdetails/:staffId" element={<StaffDetails/>}/>
        <Route path = "/staffedit/:staffId" element = {<StaffEdit />}/>
        <Route path="*" element={<NoMatch />}></Route>

      </Routes>

      <br /><br />
      <footer className="footer">copyright@clinicmanagement2021</footer>
    </Router>
    </>
  );
};

export default App;