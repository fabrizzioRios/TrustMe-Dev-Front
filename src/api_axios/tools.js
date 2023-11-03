import axios from 'axios';

const apiConnectionTool = axios.create({
    baseURL: "http://127.0.0.1:8000/test/"
})

export const makeLogin = (user_data) => apiConnectionTool.post('login/', user_data);
