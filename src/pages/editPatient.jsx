import React, {useState, useEffect } from 'react'
import PatientService from '../service/PatientService';
import { useNavigate,useParams } from 'react-router-dom';
import UserPage from './userPage';
import '../styling/styles.css';
function EditPatient(props) {
  const navigate = useNavigate();

  //get employee id using param
  const {id}=useParams();
  const ROLE = localStorage.getItem("role") ? localStorage.getItem("role") : "patient";

  

    const [memberID, setMemberID] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [dateOfRegistration,setDateOfRegistration]=useState("");
    const [address,setAddress]=useState("");
    const [cardNo,setCardNo]=useState("");
    const [insuranceNo,setInsuranceNo]=useState("");
    const [medicalHistory,setMedicalHistory]=useState("");
    const[gender,setgender]=useState("");
    const [role,setRole]=useState("");



    const UpdatePatient = (e) => {
        e.preventDefault();
        const patient = { memberID, name, password,dateOfRegistration,address,cardNo,insuranceNo,medicalHistory,gender,role };
        if(id){
            PatientService.updatePatient(patient,id).then((response)=>{
            if(ROLE==="admin"){
                navigate("/BOS/index.js/login/adminPage/");
            }
            else{
               navigate("/BOS/index.js/login/userPage/");
    
            }

          }).catch(error=>{
            console.log(error);
          })
        }
         else{
            navigate(-1);

    
       }

    
            
    }
    

    

    // // update employee api call
    useEffect(() => {
        PatientService.getPatientById(id).then((response)=>{
        setMemberID(response.data.memberID)
        setName(response.data.name)
        setPassword(response.data.password)
        setDateOfRegistration(response.data.dateOfRegistration)
        setAddress(response.data.address)
        setCardNo(response.data.cardNo)
        setInsuranceNo(response.data.insuranceNo)
        setMedicalHistory(response.data.medicalHistory)
        setgender(response.data.gender)
        setRole(response.data.role)
      }).catch(error=>{
        console.log(error);
      })
    
     
    }, [])
    

    const changeMemberIDHandler = (event) => {
        setMemberID(event.target.value);
    }

    const changeNameHandler = (event) => {
        setName(event.target.value);
    }

    const changePasswordHandler = (event) => {
        setPassword(event.target.value);
    }

    const changeDateOfRegistrationHandler = (event) => {
        setDateOfRegistration(event.target.value);
    }

    const changeAddressHandler = (event) => {
        setAddress(event.target.value);
    }

    const changeCardNoHandler = (event) => {
        setCardNo(event.target.value);
    }

    const changeInsuranceNoHandler = (event) => {
        setInsuranceNo(event.target.value);
    }

    const changeMedicalHistoryHandler = (event) => {
        setMedicalHistory(event.target.value);
    }

    const changeGenderHandler = (event) => {
        setgender(event.target.value);
    }


    const changeRoleHandler = (event) => {
        setRole(event.target.value);
    }




    const cancel = () => {
        if(ROLE==="admin"){
            navigate("/BOS/index.js/login/adminPage/");
        }
        else{
            navigate("/BOS/index.js/login/userPage/");

        }

        }
        

   

  return (
    
    
        <div className="container">
            <h2>Update Patient</h2>

            <div className='card-body'>
                <form >
                {/* <div className='row'>
                    <div className='col-sm-40 labelss'>
                        <label for='memberID'>Enter Member ID</label>
                        <input id='memberID' type='text' placeholder='Enter MemberID'
                            value={memberID}
                            onChange={changeMemberIDHandler}    
                        >

                        </input>
                        </div>
                        </div> */}
                        
                <div className='row'>
                        <div className='col-sm-40 labelss'>
                        <label for='name'>Enter Name</label>
                        <input id='name' type='text' placeholder='Enter Name'
                            value={name}
                            onChange={changeNameHandler}    
                        >

                        </input>
                    </div>
                    </div>
                   
                    
                <div className='row'>
                        <div className='col-sm-40 labelss'>
                        <label for='password'>Enter Password</label>
                        <input id='password' type='password' placeholder='Enter Password'
                            value={password}
                            onChange={changePasswordHandler}    
                        >

                        </input>
                    </div>
                    </div>


                    <div className='row'>
                        <div className='col-sm-40 labelss'>
                        <label for='dateOfRegistration'>Enter Registration Date</label>
                        <input id='dateOfRegistration' type='date' placeholder='Enter date'
                            value={dateOfRegistration}
                            onChange={changeDateOfRegistrationHandler}    
                        >

                        </input>
                    </div>
                    </div>
                    
                <div className='row'>
                        <div className='col-sm-40 labelss'>
                        <label for='address'>Enter address</label>
                        <input id='address' type='text' placeholder='Enter address'
                            value={address}
                            onChange={changeAddressHandler}    
                        >

                        </input>
                    </div>
                    </div>


                    <div className='row'>
                        <div className='col-sm-40 labelss'>
                        <label for='cardNo'>Enter cardNo</label>
                        <input id='cardNo' type='text' placeholder='Enter cardNo'
                            value={cardNo}
                            onChange={changeCardNoHandler}    
                        >

                        </input>
                    </div>
                    </div>

                    <div className='row'>
                        <div className='col-sm-40 labelss'>
                        <label for='insuranceNo'>Enter insuranceNo</label>
                        <input id='insuranceNo' type='text' placeholder='Enter insuranceNo'
                            value={insuranceNo}
                            onChange={changeInsuranceNoHandler}    
                        >

                        </input>
                    </div>
                    </div>


                    <div className='row'>
                        <div className='col-sm-40 labelss'>
                        <label for='medicalHistory'>Enter medicalHistory</label>
                        <input id='medicalHistory' type='text' placeholder='Enter medicalHistory'
                            value={medicalHistory}
                            onChange={changeMedicalHistoryHandler}    
                        >

                        </input>
                    </div>

                    </div>
                    
                <div className='row'>
                        <div className='col-sm-40 labelss'>
                        <label for='gender'>Enter gender</label>
                        <input id='gender' type='text' placeholder='Enter gender'
                            value={gender}
                            onChange={changeGenderHandler}    
                        >

                        </input>
                    </div>

                    </div>
                {/* <div className='row'>
                        <div className='col-sm-40 labelss'>
                        <label for='role'>Enter role</label>
                        <input id='role' type='text' placeholder='Enter role'
                            value={role}
                            onChange={changeRoleHandler}    
                        >

                        </input>
                    </div>

                </div> */}

                    <div className='row '>
                    <div className='col-sm-40 labelss'>
                    <button  
                        
                        onClick={UpdatePatient}
                        className="btn btn-primary">Save</button>
                        </div>
                        </div>
                        
                    <div className='row '>
                       <div className='col-sm-40 labelss'>
                    <button  
            
        

                        onClick={cancel} 
                        className="btn btn-primary">Cancel</button>
                        
                        </div>
                   </div>
                   </form>
               </div>
               </div>
              

  )
}

export default EditPatient;


