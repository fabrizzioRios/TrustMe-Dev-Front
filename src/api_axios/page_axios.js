import axios from 'axios';

const apiConnectionPage = axios.create({
    baseURL: "http://127.0.0.1:8000/test/api/v1/pages"
})

export const getAllPages = () => apiConnectionPage.get('/');

export const addPage = (page_data) => apiConnectionPage.post('/', page_data)

export const getPage = (page_id) => apiConnectionPage.get(`/${page_id}/`)

export const updatePage = (page_id, page_data) => apiConnectionPage.put(`/${page_id}/`, page_data)

export const deletePage = (page_id) => apiConnectionPage.delete(`/${page_id}`)
