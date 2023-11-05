import axios from 'axios';

const apiConnectionUser = axios.create({
    baseURL: "http://127.0.0.1:8000/test/api/v1/users/"
})

export const getAllUsers = () => apiConnectionUser.get('/');

export const addUser = (user_data) => apiConnectionUser.post('/', user_data)

export const getUser = (user_id) => apiConnectionUser.get(`/${user_id}/`)

export const updateUser = (user_data) => apiConnectionUser.put('/', user_data)

export const deleteUser = (user_id) => apiConnectionUser.delete(`/${user_id}/`)


