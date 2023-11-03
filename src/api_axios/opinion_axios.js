import axios from 'axios';

const apiConnectionOpinion = axios.create({
    baseURL: "http://127.0.0.1:8000/test/opinions"
})