import '../styling/styles.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from '../pages/About';
import { Link } from "react-router-dom";
import logo from './LIVEWELL.png';
import HeaderBar from './HeaderBar';
function home() {
    
    return (

        <div className="welcome">
            <HeaderBar />
            <h1> Welcome to Patient Management System </h1>
            <h2>For Live Well Health City</h2>
            <p>Adding Care to your Life</p>
            <p><i>This portal is designed for admin and patient to update and view patient details for Live well health city</i></p>
            <img  className="welcomeLogo" src={logo} alt="logo" />
            <br></br>
         
        </div>
    );
}
export default home;