import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.10.30:8080/pharmacy',
    
});

export default api;
