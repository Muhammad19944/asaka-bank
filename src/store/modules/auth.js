import authApi from "@/api/auth";
import { token } from "@/services/TokenService";

const state = {
	isSubmitting: false,
	isLoading: false,
	currentToken: null,
	currentUserData: null,
	validationErrors: null,
	isLoggedIn: null,
	COMPANY_ID: null
};
export const mutationTypes = {
	registerStart: "[auth] registerStart",
	registerSuccess: "[auth] registerSuccess",
	registerFailed: "[auth] registerFailed",

	loginStart: "[auth] loginStart",
	loginSuccess: "[auth] loginSuccess",
	loginFailed: "[auth] loginFailed",

	getCurrentUserStart: "[auth] getCurrentUserStart",
	getCurrentUserSuccess: "[auth] getCurrentUserSuccess",
	getCurrentUserFailed: "[auth] getCurrentUserFailed"
};
export const actionTypes = {
	register: "[auth] register",
	login: "[auth] login",
	getCurrentUser: "[auth] getCurrentUser"
};

const mutations = {
	SET_COMPANY_ID(state, payload) {
		state.COMPANY_ID = payload;
	},

	[mutationTypes.registerStart](state) {
		state.isSubmitting = true;
		state.validationErrors = null;
	},
	[mutationTypes.registerSuccess](state, payload) {
		state.isSubmitting = false;
		state.currentToken = payload;
		state.currentUserData = payload;
		state.isLoggedIn = true;
	},
	[mutationTypes.registerFailed](state, payload) {
		state.isSubmitting = false;
		state.validationErrors = payload;
	},
	[mutationTypes.loginStart](state) {
		state.isSubmitting = true;
		state.validationErrors = null;
	},
	[mutationTypes.loginSuccess](state, payload) {
		state.isSubmitting = false;
		state.currentToken = payload.token;
		state.currentUserData = payload.user;
		state.isLoggedIn = true;
	},
	[mutationTypes.loginFailed](state, payload) {
		state.isSubmitting = false;
		state.validationErrors = payload;
	},
	[mutationTypes.getCurrentUserStart](state) {
		state.isLoading = true;
	},
	[mutationTypes.getCurrentUserSuccess](state, payload) {
		state.isLoading = false;
		state.currentUserData = payload;
		state.isLoggedIn = false;
	},
	[mutationTypes.getCurrentUserFailed](state) {
		state.isLoading = false;
		state.isLoggedIn = false;
		state.currentUserData = null;
	}
};

const actions = {
	[actionTypes.register](context, credentials) {
		return new Promise((resolve, reject) => {
			context.commit(mutationTypes.registerStart);
			authApi
				.register(credentials)
				.then((response) => {
					context.commit(mutationTypes.registerSuccess, response.data);
					resolve(response.data);
				})
				// .then(
				// 	({data}) => {context.commit(mutationTypes.registerSuccess, data);resolve(data);},
				// 	({data}) => {context.commit(mutationTypes.registerFailed, data);resolve(data);}
				// )
				.catch((error) => {
					context.commit(mutationTypes.registerFailed, error.message);
					reject(error);
				});
		});
	},
	[actionTypes.login]({ commit }, credentials) {
		return new Promise((resolve) => {
			commit(mutationTypes.loginStart);
			authApi
				.login(credentials)
				.then(
					(response) => {
						commit(mutationTypes.loginSuccess, response.data);
						// commit('SET_COMPANY_ID', response.data.company.id)
						if(response.data.user.company) {
							commit("SET_COMPANY_ID", response.data.user.company.id);
						}
						token.save(response.data.token);
						resolve(response.data);
					}
				)
				.catch((error) => {
					console.log(error);
					commit(mutationTypes.loginFailed, error.data.message);
				});
		});
	},
	[actionTypes.getCurrentUser]({ commit }) {
		return new Promise((resolve) => {
			commit(mutationTypes.getCurrentUserStart);
			authApi
				.getCurrentUserApi()
				.then((response) => {
						commit(mutationTypes.getCurrentUserSuccess, response.data);
						if(response.data.company) {
							commit("SET_COMPANY_ID", response.data.company.id);
						}
						resolve(response.data);
					}
				)
				.catch((error) => {
					console.log(error);
					commit(mutationTypes.getCurrentUserFailed);
					// this.$toast.error(error.data.message);
				});
		});
	}
};

const getters = {
	getUser: (state) => state.currentUserData
};

export default {
	state,
	mutations,
	actions,
	getters
};
