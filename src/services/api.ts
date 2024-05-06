import axios from 'axios'

const api = axios

api.defaults.baseURL = 'https://api.fullbooks-livraria.com/api'
api.defaults.headers.post['Content-Type'] = 'application/json';
api.defaults.headers.common['Authorization'] = '';

export default api;