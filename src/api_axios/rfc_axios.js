import axios from 'axios';

const apiConnectionRfc = axios.create({
    baseURL: "http://127.0.0.1:8000/test/rfcs"
})

export const getAllRfcs = () => apiConnectionRfc.get('/');

export const addRfc = (rfc_data) => apiConnectionRfc.post('/', rfc_data)

export const getRfc = (rfc_id) => apiConnectionRfc.get(`/${rfc_id}/`)

export const updateRfc = (rfc_data) => apiConnectionRfc.put('/', rfc_data)

export const deleteRfc = (rfc_id) => apiConnectionRfc.delete(`/${rfc_id}/`)
