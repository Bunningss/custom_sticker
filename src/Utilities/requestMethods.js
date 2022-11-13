import axios from 'axios';

const base_url = 'https://tmahmud.herokuapp.com/';
// const base_url = 'http://localhost:5000';

// Fetch Access Token
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser && currentUser.accessToken;

export const publicReq = axios.create({
    baseURL: base_url
});

export const userReq = axios.create({
    baseURL: base_url,
    headers: { token: `Bearer ${TOKEN}`}
});