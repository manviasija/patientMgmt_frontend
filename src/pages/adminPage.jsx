import React from 'react'
import { useNavigate, useParams,useLocation } from 'react-router-dom';

import EmployeeService from '../service/PatientService';
const AdminPage=()=>{
    
        const {id}=useParams();
        console.log(id);
        const navigate = useNavigate();
          const [patient, setPatient] = React.useState([]);
          const [firstLoad, setFirstLoad] = React.useState(true);
          const ROLE = localStorage.getItem("role") ? localStorage.getItem("role") : "admin";
      
      
          if (firstLoad) {
              EmployeeService.getAllPatients().then(res => {
              
                      setPatient(res.data);
                      setFirstLoad(false);
      
              
                  
              }).catch(_ => {
                  localStorage.removeItem("jwt");
                  navigate("/");
              })
          }
          const onLogoutClick = () => {
              localStorage.clear();
              navigate("/BOS/index.js/login");
          }
          
          const ViewPatient = (id) => {
              navigate(`viewPatient/${id}`);
          }
      
          const editPatient = (id) => {
              navigate(`editPatient/${id}`);
          }
          
          let userId=localStorage.getItem("username");
      
          const location = useLocation();
      
          
          
          
      
         
        return (
          <div>
              
              
              
                  <h2 className="text-center">Patient List</h2>
                  {(location.pathname !== "/") ? <button className="btn btn-primary" style={{ marginRight: 30  }} onClick={onLogoutClick} > Logout</button> : <></>}
                 
            
                 <br></br>
                  <div className="row">
                      <table className="table table-striped table-bordered">
      
                          <thead>
                              <tr>
                                  <th>Patient Name</th>
                                  <th> Registered on</th>
                                  <th>Gender</th>
                                  <th>Card No</th>
                                  <th>Insurance No</th>
                                  <th>Medical History</th>
                                  <th>Address</th>
                                  <th>Action</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                              
      
                                 
      
                                  
                                  patient.map(
      
                                      
                                      (patient) =>
                              
                                      
                                              <tr key={patient.id }  >

                                              <td> {patient.name} </td>

                                              <td> {patient.dateOfRegistration}</td>
                                             
                                              <td> {patient.gender} </td>
                                              
                                              <td> {patient.cardNo} </td>
                                              
                                              <td> {patient.insuranceNo} </td>
                                              
                                              <td> {patient.medicalHistory} </td>
                                              
                                              <td> {patient.address} </td>
                                              
                                              <td>
                                                  <button onClick={() => editPatient(patient.id)} className="btn btn-info"  >Update Details</button>
              
                                                 </td>
                                          </tr>
                                          
                                          
                                              
                                          
      
                                      
                                          
                                          
      
                          
                                      
                                          
                                      )
                                  
                              }
                          </tbody>
                      </table>
      
                  </div>
      
              </div>
    );

}
export default AdminPage;