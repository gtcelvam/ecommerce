import axios from 'axios';
export const base_url = 'https://ts-shopping-backend.onrender.com/';
// const base_url = 'http://localhost:2000/api';


export const publicRequest = axios.create({
    baseURL : base_url
}); 

export const userRequest = axios.create({
    baseURL : base_url
})
