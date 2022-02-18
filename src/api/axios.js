import Vue from "vue";
import Axios from "axios";
import { token } from "@/services/TokenService";
import { removeAllTokens } from "../services/TokenService";
// import { URL_BASE } from '@/defaults'
// import router from '../router'
// import store from '../store'
// import notification from '../plugins/vue-notification'
// {
//     headers: {
//         Accept: '*/*',
//             'Content-type': 'application/json',
//     },
// }
Axios.interceptors.request.use(
	(config) => {
		config.headers = {
			Authorization: token.get() ? "Token " + token.get() : "",
			// withCredentials: true,
			Accept: "application/json"
			// 'Content-Type': 'application/json',
		};
		// console.log(config.headers)
		return config;
	},
	(error) => Promise.reject(error)
);

Axios.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response.status === 401) {
			removeAllTokens();
			// store.state.userProfile = {}
			// store.state.permissionList = []
			// router.push({ name: 'auth' })
		}

		return Promise.reject(error.response);
	}
);

Axios.defaults.baseURL = process.env.VUE_APP_BASE_URL || process.env.VUE_APP_BASE_URL2;
Vue.prototype.$http = Axios;

export default Axios;

// const instance = Axios.create({
//     baseURL: URL_BASE,
//     headers: {
//         common: {
//             'X-Requested-With': 'XMLHttpRequest',
//         },
//     },
// })
//
// instance.interceptors.request.use(
//     (config) => {
//         config.headers['Accept-Language'] = localStorage.getItem('lang') ? localStorage.getItem('lang') : LANG
//
//         if (token.get()) {
//             config.headers.Authorization = 'Bearer ' + token.get()
//         }
//
//         return config
//     },
//     (error) => Promise.reject(error)
// )
//
// instance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//         if (error.response.status === 401) {
//             removeAllTokens()
//             store.state.userProfile = {}
//             store.state.permissionList = []
//             router.push({ name: 'auth' })
//         }
//
//         notification.error(error.response.data.error.message)
//
//         return Promise.reject(error)
//     }
// )
//
// Vue.prototype.$http = instance
