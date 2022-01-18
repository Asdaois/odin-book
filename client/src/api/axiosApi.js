import axios from 'axios'

// TODO: This is to change later on
const axiosApi = axios.create({ baseURL: 'http://localhost:3001/' })
axiosApi.defaults.headers.post['Content-Type'] = 'application/json'

export default axiosApi
