
import React from 'react'
import { useNavigate, useParams,useLocation } from 'react-router-dom';

import PatientService from '../service/PatientService';

function UserPage() {
  const {id}=useParams();
  console.log(id);
  const navigate = useNavigate();
    const [patient, setPatient] = React.useState([]);
    const [firstLoad, setFirstLoad] = React.useState(true);
    const ROLE = localStorage.getItem("role") ? localStorage.getItem("role") : "patient";


    if (firstLoad) {
        PatientService.getAllPatients().then(res => {
        
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
    <div className='container'>
        
        <div className='row'>
        
            <h2 className="text-center"> Patient Page</h2>
            <div className='col-sm-40 text-right'>
            {(location.pathname !== "/") ? <button className="btn btn-primary " style={{ marginRight: 30  }} onClick={onLogoutClick} > Logout</button> : <></>}
            </div>
            <div className='col-sm-40'>
            <p>This page shows only the necessary details of the patient, to view all details, please choose <strong>View All Details</strong></p>
            </div>
            </div>
            <br></br>
            <div className="row">
                <table className="table table-striped table-bordered">

                    <thead>
                        <tr>
                            <th>Patient id</th>
                            <th> Patient Name</th>
                            <th> Registered on</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        

                           

                            
                            patient.map(

                                
                                (patient) =>
                        
                                
                                        <tr key={patient.id }  hidden={patient.memberID !==userId}>
                                        <td>
                                            
                                            {patient.memberID}

                                            
                                        </td>
                                        <td> {patient.name} </td>
                                        <td> {patient.dateOfRegistration}</td>
                                       
                                        
                                        <td>
                                            <button onClick={() => editPatient(patient.id)} className="btn btn-info"  >Update My Details</button>
        
                                            <button style={{ marginLeft: "10px" }} onClick={() => ViewPatient(patient.id)} className="btn btn-info"  >View All Details</button>
                                        </td>
                                    </tr>
                                    
                                    
                                        
                                    

                                
                                    
                                    

                    
                                
                                    
                                )
                            
                        }
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default UserPage;