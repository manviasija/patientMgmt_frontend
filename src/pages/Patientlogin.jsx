
import {
    Label,
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Row,
    Button,
  } from "reactstrap";
  
import { useState } from 'react';
import '../styling/styles.css';
const Patientlogin=()=>{
    const [enteredDetailsIsValid,setEnteredDetailsIsValid]=useState(true);
    
    const[loginDetail,setLoginDetail]=useState({
        id:'',
        password:''
    })

    const handleChange=(event,field)=>{
        let actualValue=event.target.value;
        console.log("value",actualValue.length);
        if(actualValue.length<6 ){
            setLoginDetail({
                ...loginDetail,[field]:actualValue
            })
        }
        else{
            alert("Error!")
        }
        
        
    }

    const handleFormSubmit=(event)=>{
      
        event.preventDefault();
        //validation
       if(loginDetail.id.trim()=='' || loginDetail.password.trim()==''){
        setEnteredDetailsIsValid(false);
        return;
       } 
       else if(loginDetail.id.length<5 ){
        setEnteredDetailsIsValid(false);
        return;
       }

       setEnteredDetailsIsValid(true);
    }

    return(
        <div> 
           
        <form >
        <div className="card">
        <h3>Login here!</h3>
        <div className="form-group row">

            <label htmlFor="id">
                User ID
            </label>
            <div className="col-sm-20">
            <input type="numbers" name="id" value={loginDetail.id}
            onChange={(e)=>handleChange(e,'id')}></input>
            </div>
            
        </div>
        <div className="form-group row">
            
            <label htmlFor="password">
                Password
            </label>
            <div className="col-sm-20">
            <input type="password" name="password" value={loginDetail.password}
            onChange={(e)=>handleChange(e,'password')}></input>
            </div>
            </div>
            <br></br>

            {!enteredDetailsIsValid && <p className='error-text'><i>Please check input data</i></p>}
            

        <div className="col-sm-20">
            <input type="submit" value="Login" onClick={handleFormSubmit}/>
        </div>
        </div>
        </form>
        </div>  
    );
}

export default Patientlogin;