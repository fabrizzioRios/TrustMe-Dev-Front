import axios from 'axios';

const apiConnectionOpinion = axios.create({
    baseURL: "http://127.0.0.1:8000/test/api/v1/opinions"
})

export const getAllOpinions = () => apiConnectionOpinion.get('/');

export const addOpinion = (opinon_data) => apiConnectionOpinion.post('/', opinon_data)

export const getOpinion = (opinion_id) => apiConnectionOpinion.get(`/${opinion_id}/`)

export const updateOpinion = (opinion_id, opinon_data) => apiConnectionOpinion.put(`/${opinion_id}/`, opinon_data)

export const deleteOpinion = (opinion_id) => apiConnectionOpinion.delete(`/${opinion_id}`)