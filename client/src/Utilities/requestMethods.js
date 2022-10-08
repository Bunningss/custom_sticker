import axios from 'axios';

const base_url = 'https://custom-stc-api.herokuapp.com/'

export const publicReq = axios.create({
    baseURL: base_url
})