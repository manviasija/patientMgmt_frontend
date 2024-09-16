import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify'
import LoginSchema  from "../validation/LoginFormValidation";
import LoginService from "../service/LoginService";
import HeaderBar from "./HeaderBar";


const Login = () => {
  

  const navigate = useNavigate();

  const [memberID, setmemberID] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handlememberIDChange = event => setmemberID(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const [message, setMessage] = React.useState("");

  const handleSubmit =  async(e) => {
      e.preventDefault();

      const loginCredentials = { memberID, password };
      if(memberID==="" || password===""){
        alert("Member ID and password are required")
      }
      const response = await LoginService.authenticate(loginCredentials)
      
      
      .catch(error=>{
        
          alert("Please check your Member ID or Password")
          
      });
      const body = response.data;
      
      if (body.jwt) {
          localStorage.clear();
          localStorage.setItem("jwt", body.jwt);
          localStorage.setItem("role", body.role);
          localStorage.setItem("username",memberID);
          
          if(body.role==="admin"){
              navigate("adminPage")
          }
          else{
              navigate("userPage")
          }
          
      } else {
          setMessage("Login failed");
      }
      setmemberID("");
      setPassword("");
  };

  

  
  return (
    <>
      <Wrapper>
      
        <div className="card">
        <form  >
              <h1 className="modal-title">Login Here!</h1>
                <div className="input-block col-sm-20">
                    <label htmlFor="userID" className="input-label">
                      User ID*
                    </label>
                    <input
                      type="numbers"
                      autoComplete="off"
                      name="memberID"
                      id="memberID"
                      placeholder="User Id"
                      value={memberID}
                      onChange={handlememberIDChange}
                      required
                    />
                   
                    
                  </div>  
                  
                  
                  <div className="input-block">
                    <label htmlFor="password" className="input-label">
                      Password*
                    </label>
                    <input
                      type="password"
                      autoComplete="off"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                    
                  </div>
                  
                  <div className="modal-buttons">
                    <button className="input-button" type="submit" onClick={handleSubmit} >
                      Login
                    </button>
                  </div>
                </form>
                
              </div> 
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  .modal-container {
    display: flex;
    max-width: 60vw;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;

    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin-left: 0%;
    font-weight: 400;
    color: black;
  }
  .form-error {
    font-size: 0.8rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
    align-content: center;
  }

  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }
  .modal-right img {
    width: 100%;
    height: 100%;
    transform: scale(1);
    -o-object-fit: cover;
    object-fit: cover;
    transition-duration: 1.2s;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }

  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-button {
    padding: 1.2rem 3.2rem;
    outline: none;
    text-transform: uppercase;
    border: 0;
    color: #fff;
    border-radius: 4px;
    background: #13BFB5;
    margin-left:45%;;
    transition: 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
  }
  .input-button:hover {
    background: #0b746f;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }

  .input-block {
    display: flex;
    width:350px;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #13BFB5;
   margin-left: 40%;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }

  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }

    .modal-right {
      display: none;
    }
  }
`;

export default Login;
