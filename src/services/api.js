import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.apiURL,
    withCredentials: true,
})

export default api