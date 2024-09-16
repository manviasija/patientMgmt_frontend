import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Welcome';
import HeaderBar from './pages/HeaderBar';
import Adminlogin from './pages/Admin';
import Patientlogin from './pages/Patientlogin';
import Login from './pages/login';
import {BrowserRouter as Router, Route, Redirect, Routes} from 'react-router-dom';
import About from './pages/About';
import { Link } from "react-router-dom";
import UserPage from './pages/userPage';
import AdminPage from './pages/adminPage';
import ViewPatient from './pages/viewPatient';
import EditPatient from './pages/editPatient';
function App() {
  return (
    <div className="App">
      
     
     <Routes>
     <Route path="BOS/index.js/" element={<Home />} />
     
     <Route path="BOS/index.js/about" element={<About />} />
{/*        
      <Route path="BOS/index.js/adminlogin" element={<Adminlogin /> } />
                   
      <Route path="BOS/index.js/patientlogin" element={ <Patientlogin />} /> */}
                     
      <Route path="BOS/index.js/login" element={ <Login />} />

      <Route path="BOS/index.js/login/adminPage" element={<AdminPage/>} />

      <Route path="BOS/index.js/login/userPage" element={<UserPage />} />
      
      <Route path="BOS/index.js/login/adminPage/editPatient/:id" element={<EditPatient />} />
      <Route path="BOS/index.js/login/adminPage/viewPatient/:id" element={<ViewPatient />} />
      <Route path="BOS/index.js/login/userPage/viewPatient/:id" element={<ViewPatient />} />
      <Route path="BOS/index.js/login/userPage/editPatient/:id" element={<EditPatient />} />
      </Routes>
    </div>
  );
}

export default App;
