

import React from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import PatientService from '../service/PatientService';



const ViewPatient=()=>{
    const navigate = useNavigate();
    
    const ROLE = localStorage.getItem("role") ? localStorage.getItem("role") : "patient";
    const {id}=useParams();
    const [patient, setPatient] = React.useState({});
    const [firstLoad, setFirstLoad] = React.useState(true);

    if (firstLoad) {
        PatientService.getPatientById(id).then((res) => {
            setPatient(res.data);
            setFirstLoad(false);
        });
    }

    const cancel = () => {
        if(ROLE==="admin"){
            navigate('/BOS/index.js/login/adminPage/');
        }
        else{
            navigate("/BOS/index.js/login/userPage/");

        }

    }

  return (
    <div>
        
        <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">Patient Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Name: {patient.name} </label>
                         
                    </div>
                    <div className="row">
                        <label> MemberID: {patient.memberID}</label>
                    </div>
                    <div className="row">
                        <label>Registered on: {patient.dateOfRegistration}</label>
                    </div>

                    <div className="row">
                        <label>Card No: {patient.cardNo}</label>
                        
                    </div>

                    <div className="row">
                        <label>insurance No: {patient.insuranceNo}</label>
        
                    </div>
                    <div className="row">
                        <label>Address: {patient.address}</label>
        
                    </div>
                    <div className="row">
                        <label>medicalHistory: {patient.medicalHistory}</label>
        
                    </div>
                    <div className="row">
                        <label>gender: {patient.gender}</label>
        
                    </div>

                    <div className='row'>
                        <button className='btn btn-primary' onClick={cancel}>Cancel</button>
                    </div>
                    
                    
                </div>

            </div>

    
        
             

    </div>
  )
}
export default ViewPatient;