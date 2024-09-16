import '../styling/styles.css'
import logo from './LIVEWELL.png';
import { NavLink } from 'react-router-dom';
function HeaderBar() {
    return (
    <nav className="navbar navbar-expand-lg bg-transparent">
        <div className="container-fluid">
            
            <div className="navbar" id="navbarSupportedContent">
                <img className="logo" src={logo} alt="logo" />        
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item ">
                        <a className='nav-link' href="">Home</a>
                    </li>
                  
                   
                    <li className="nav-item">
                        <a className="nav-link" href="index.js/login"> Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="index.js/about">About Portal</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
    }

export default HeaderBar;