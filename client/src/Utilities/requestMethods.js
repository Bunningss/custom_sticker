import axios from 'axios';

// const base_url = 'https://tmahmud.herokuapp.com/'
const base_url = 'http://localhost:5000';

export const publicReq = axios.create({
    baseURL: base_url
})