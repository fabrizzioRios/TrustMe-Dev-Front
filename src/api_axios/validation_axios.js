import axios from 'axios';

const apiConnectionValidation = axios.create({
    baseURL: "http://127.0.0.1:8000/test/validations"
})

export const getAllValidations = () => apiConnectionValidation.get('/');

export const addValidation = (validation_data) => apiConnectionValidation.post('/', validation_data)

export const getValidation = (validation_id) => apiConnectionValidation.get(`/${validation_id}/`)

export const updateValidation = (validation_data) => apiConnectionValidation.put('/', validations_data)

export const deleteValidation = (validation_id) => apiConnectionValidation.delete(`/${validation_id}/`)
