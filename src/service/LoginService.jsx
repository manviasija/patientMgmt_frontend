import axios from 'axios';

const API_BASE_URL = "/authenticate/";


let headers = {
    'Content-Type': 'application/json'
    
}
const authenticate = (user) => {
    
    return axios.post(API_BASE_URL, user, { headers });
    
}


export default  {authenticate} ;