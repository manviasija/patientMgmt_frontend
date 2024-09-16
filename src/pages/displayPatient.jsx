import React from 'react'
import PatientService from '../service/EmployeeService';


const displayPatient= (props) => {
    const [patient, setPatient] = React.useState({});
    const [firstLoad, setFirstLoad] = React.useState(true);

    if (firstLoad) {
        PatientService.getPatientById(props.match.params.id).then((res) => {
            setPatient(res.data);
            setFirstLoad(false);
        });
    }

    return (
        <div>
            <br></br>
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center"> View Employee Details</h3>
                <div className="card-body">
                    <div className="row">
                        <label> Name: </label>
                        <div> {patient.name}</div>
                    </div>
                    <div className="row">
                        <label> Role: </label>
                        <div> {patient.role}</div>
                    </div>
                    <div className="row">
                        <label> Registered ON:</label>
                        <div> {patient.dateOfRegistration}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewEmployeeComponent;