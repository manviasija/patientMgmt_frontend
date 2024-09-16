import logo from './LIVEWELL.png';
import '../styling/styles.css';
function About(){
    return(
        <div className='container'>
        <div className='row'>
            <h3>About the Portal</h3>
        </div>
        <p>This portal is designed for admin and patient to update and view patient details for Live well health city.</p>
        <div className='row'>
            
        <div className='col-sm card'>
            <p>The admin can:  </p><br></br>
                1. View Patients detail<br></br>
                2. Edit Patient Details
            <br></br>    
            <br></br>
            
        </div>
        
        <div className='col-sm card'>
            <p>The patient can</p><br></br>
            
               1. Edit their details<br></br>
            2. View details
                
        </div>
            <div className='col-sm'>
            <img  className="aboutLogo" src={logo} alt="logo" />
            </div>
        </div>
        <p>For any other queries:
                <br></br>
                Call us on: +91 1231234533
                <br></br>
                Email: queries@livewell.com
            </p>
        </div>
    );
}
export default About;