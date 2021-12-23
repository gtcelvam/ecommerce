import axios from 'axios';
const base_url = 'https://thselvan1.herokuapp.com/api';


export const publicRequest = axios.create({
    baseURL : base_url
}); 

export const userRequest = axios.create({
    baseURL : base_url
})
