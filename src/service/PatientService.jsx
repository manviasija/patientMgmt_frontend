 import axios from "axios";

const PATIENT_API_BASE_URL="/api/v1/patients/";

let headers = {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "*",
}

const getAllPatients = () => {
    headers = { ...headers, "Authorization": `Bearer  ${localStorage.getItem("jwt")}` };
    return axios.get(PATIENT_API_BASE_URL, { headers });
}



const getPatientById = (id) => {
    headers = { ...headers, "Authorization": `Bearer  ${localStorage.getItem("jwt")}` };
    return axios.get(PATIENT_API_BASE_URL + '/' + id, { headers });
}

const updatePatient = (patient, id) => {
    headers = { ...headers, "Authorization": `Bearer  ${localStorage.getItem("jwt")}` };
    return axios.put(PATIENT_API_BASE_URL + '/' + id, patient, { headers });
}




export default {getAllPatients, getPatientById, updatePatient};