import axios from 'axios';

const api = axios.create({
    baseURL: 'https://db-blog-rho.vercel.app/'
});


export default api;