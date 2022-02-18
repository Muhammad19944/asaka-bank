import axios from '@/api/axios'
const register = (credentials) => {
  // username, first_name, last_name, father_name, verification_type, phone_number, password
  return axios.post('/individual/user-register/', credentials)
}
const login = (credentials) => {
  // password username,
  return axios.post('/login/', credentials)
}
const getCurrentUserApi = () => {
  return axios.get('/my/profile/')
}

export default {
  register,
  login,
  getCurrentUserApi
}
