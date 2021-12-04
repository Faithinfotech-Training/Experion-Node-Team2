import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./app.css";

//Common imports
import Home from './pages/home/index';
import LoginForm from "./pages/login/index";
import About from "./pages/about/index";
import NoMatch from "./pages/noMatch/index";
import roleController from "./helpers/roleLogin/roleLogin";
import FooterPage from "./components/footer/footer";

//Admin
import RegisterUser from "./pages/adminDashboard/registerUser";
import RegisterStaff from "./pages/adminDashboard/registerStaff";
import StaffList from "./pages/adminDashboard/staffList";
import StaffDetails from "./pages/adminDashboard/staffDetails";
import StaffEdit from "./pages/adminDashboard/staffEdit";

//FrontOffice
import PatientDisplay from "./pages/frontOfficeDashboard/patientDisplay";
import PatientView from "./pages/frontOfficeDashboard/patientView";
import PatientDelete from "./pages/frontOfficeDashboard/patientDelete";
import PatientEdit from "./pages/frontOfficeDashboard/patientEdit";
import BillGenerate from "./pages/frontOfficeDashboard/billGenerate";
import AppointmentDisplay from "./pages/frontOfficeDashboard/appointmentDisplay";
import AppointmentView from "./pages/frontOfficeDashboard/appointmentView";
import AppointmentDelete from "./pages/frontOfficeDashboard/appointmentDelete";
import RegisterPatient from "./pages/frontOfficeDashboard/RegisterPatient";
import PatientAppointment from "./pages/frontOfficeDashboard/PatientAppointment";

//Doctor

import Appointments from "./pages/doctorDashboard/appoinmentList";
import PatientDetails from "./pages/doctorDashboard/PatientDetails";
import PrescriptionAdd from "./pages/doctorDashboard/priscription";
import Tests from "./pages/doctorDashboard/viewTestDetails";
import Labresult from "./pages/doctorDashboard/testDetails";

//LabTechnician

import LabreportGenerate from "./pages/labtechnicianDashboard/labreportGenerate";
import LabReportList from "./pages/labtechnicianDashboard/labreportList";
import ReportDetails from "./pages/labtechnicianDashboard/labreportDetails";
import LabreportEdit from "./pages/labtechnicianDashboard/labreportEdit";
import TestList from "./pages/labtechnicianDashboard/testList";
import TestDetails from "./pages/labtechnicianDashboard/testDetails";

function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossOrigin="anonymous" />
      <MyRouter />
    </>
  );
};

function MyRouter() {
  return (
    <>
      <div className="backgroundImage">
      <Router>
      <div className = "container">
      HealthTech
      <img className = "logoImg" src = "https://abuzzwebtech.com/images/other/intro-img.png"></img>
      </div>
        <center>
          <h5>Clinic Management Software to manage
            clinic’s daily operations and for doctors to provide 
            high-quality treatment and care to their patients. </h5>
        </center>
        <Navbar bg="primary" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">CMS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">

                {/* Links for All roles  */}
                <Link className="link" to="/">Home</Link>
                {!localStorage.getItem('mytoken') && <Link className="link" to="/login">Log In</Link>}
                
                
                {/* Links for Admin  */}
                {!localStorage.getItem('mytoken') && <Link className="link" to="/userreg">Register User</Link>}
                {roleController.isAdmin() && <Link className="link" to="/staffreg">Register Staff</Link>}
                {roleController.isAdmin() && <Link className="link" to="/stafflist">Staff List</Link>}
                
                <NavDropdown title="Staff Management" id="nav-dropdown">
                  <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Patient Management" id="nav-dropdown">
                  <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                </NavDropdown>

                {/* Links for FrontOffice  */}
                {roleController.isFrontoffice() && <Link className="link" to="/registerPatient">Register Patient</Link>}
                {roleController.isFrontoffice() && <Link className="link" to="/patientDisplay">Registered Patient List</Link>}
                {roleController.isFrontoffice() && <Link className="link" to="/patientAppointment">Patient Appointment</Link>}
                {roleController.isFrontoffice() && <Link className="link" to="/appointmentDisplay">Appointment List</Link>}

                {/* Links for Doctor  */}
                {roleController.isDoctor() && <Link className="link" to="/appointmentlist">Consultation List</Link>}

                {/* Links for LabTechnician  */}
                {roleController.isLabtechnician() && <Link className="link" to="/testlist">Prescribed Tests</Link>}        
                {roleController.isLabtechnician() && <Link className="link" to="/reportlist">Lab Reports</Link>}         

                {/* Links for All roles  */}
                <Link className="link" to="/about">About Us</Link>
                {localStorage.getItem('mytoken') && <div><Link className="link" onClick={() => window.location = '/login'} to="/login">Logout</Link></div>}


                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<NoMatch />}></Route>

          {/* Routes for Admin  */}
          <Route path="/userreg" element={<RegisterUser />} />
          <Route path="/staffreg" element={<RegisterStaff />} />
          <Route path="/stafflist" element={<StaffList />} />
          <Route path="/staffdetails/:staffId" element={<StaffDetails />} />
          <Route path="/staffedit/:staffId" element={<StaffEdit />} />

          {/* Routes for FrontOffice  */}
          <Route path="/registerPatient" element={<RegisterPatient />} />           {/*Register a new patient  */}
          <Route path="/patientDisplay" element={<PatientDisplay />} />             {/* display all registered patients  */}
          <Route path="/patientView/:patientId" element={<PatientView />} />        {/* display patient's details  */}
          <Route path="/patientDelete/:patientId" element={<PatientDelete />} />    {/*  delete a patient  */}
          <Route path="/patientEdit/:patientId" element={<PatientEdit />} />        {/*  edit an existing patient  */}
          <Route path="/billGenerate/:patientId" element={<BillGenerate />} />      {/*  generate bill to patients  */}
          <Route path="/patientAppointment" element={<PatientAppointment />} />     {/*  Giving appointment to patient  */}
          <Route path="/appointmentDisplay" element={<AppointmentDisplay />} />     {/* Display all appointments  */}
          <Route path="/appointmentView/:id" element={<AppointmentView />} />       {/* Display appointment details  */}
          <Route path="/appointmentDelete/:id" element={<AppointmentDelete />} />   {/* Cancel appointment  */}
        

          {/* Routes for Doctor  */}
          <Route path="/appointmentlist" element={<Appointments />} />
          <Route path="/patientdetails/:id" element={<PatientDetails />} />
          <Route path="/prescriptionadd/:id" element={<PrescriptionAdd />} />
          <Route path="/patient/tests/:id" element={<Tests/>} />
          <Route path="/patient/labresult/:id" element={<Labresult/>} />


          {/* Routes for LabTechnician  */}
          <Route path="/testlist" element={<TestList/>}/>
          <Route path="/testdetails/:testId" element={<TestDetails/>}/>
          <Route path="/generatereport/:testId" element={<LabreportGenerate/>}/>
          <Route path="/reportlist" element={<LabReportList/>}/>
          <Route path="/reportdetails/:labReportId" element={<ReportDetails/>}/>
          <Route path="/reportedit/:labReportId" element={<LabreportEdit/>}/>


        </Routes>
      
      <FooterPage/>
      </Router>
      </div>
    </>
  );
};

export default App;