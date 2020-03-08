import axios from 'axios'

const token = 'eEJBRE5ai4FV3JrmsL8gLvYPdAOc1-fIGmnZftTgh98';

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  headers: {
    Authorization: `Bearer ${token}`,
  },
})

export default api;