import axios from '@/api/axios'
const get_merchant_list = () => {
  return axios({
    method: 'get',
    url: process.env.VUE_APP_SESSION_URL + '/rest/merchant_list/',
    auth: { username: process.env.VUE_APP_USERNAME, password: process.env.VUE_APP_PASSWORD }
  })
}

const get_category_list = () => {
  return axios({
    method: 'get',
    url: process.env.VUE_APP_SESSION_URL + '/rest/category_list/',
    auth: { username: process.env.VUE_APP_USERNAME, password: process.env.VUE_APP_PASSWORD }
  })
}
const merchant_by_category_id = (id) => {
  return axios({
    method: 'get',
    url: process.env.VUE_APP_SESSION_URL + '/rest/merchant_by_category_id?categoryId=' + id,
    auth: { username: process.env.VUE_APP_USERNAME, password: process.env.VUE_APP_PASSWORD }
  })
}
const merchant_by_id = (id) => {
  return axios({
    method: 'get',
    url: process.env.VUE_APP_SESSION_URL + '/rest/merchant_by_id?id=' + id,
    auth: { username: process.env.VUE_APP_USERNAME, password: process.env.VUE_APP_PASSWORD }
  })
}
const payment_wu_execute = (data) => {
  return axios({
    method: 'post',
    url: process.env.VUE_APP_SESSION_URL + '/rest/payment/wu_execute',
    auth: { username: process.env.VUE_APP_USERNAME, password: process.env.VUE_APP_PASSWORD },
    data
  })
}
const payment_wu_confirm = (data) => {
  return axios({
    method: 'post',
    url: process.env.VUE_APP_SESSION_URL + '/rest/payment/wu_confirm',
    auth: { username: process.env.VUE_APP_USERNAME, password: process.env.VUE_APP_PASSWORD },
    data
  })
}

export default {
  get_merchant_list,
  get_category_list,
  merchant_by_category_id,
  merchant_by_id,
  payment_wu_execute,
  payment_wu_confirm
}
