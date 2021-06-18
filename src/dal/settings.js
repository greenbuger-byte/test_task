import axios from 'axios';

export const requestWithOutAuth = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/'
});
export const errors = (err)=>{
    console.log(err);
    return null;
}
