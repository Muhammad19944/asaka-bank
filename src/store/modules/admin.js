
const state = {
	statusList: [],
	plasticCardList: [],
	creditList: [],
	branchesList: [],
	depositList: [],
	transferList: [],
	financingList: []
}

const getters = {
	getStatusList: (state) => state.statusList,
	getPlasticCardList: (state) => state.plasticCardList,
	getCreditList: (state) => state.creditList,
	getBranchesList: (state) => state.branchesList,
	getDepositList: (state) => state.depositList,
	getTransferList: (state) => state.transferList,
	getFinancingList: (state) => state.financingList,
}

const mutations = {
	/*
	*
	* */
	SET_PAYLOAD(state, payload) {
		state[payload.stateKey] = payload.payload
	}
}

const actions = {
	/*
	* Get status list
	* */
	fetchStatusList({ commit }) {
		this._vm.$http.get('/1/status/', {
			params: {
				page_size: 500
			}
		})
			.then(({ data }) => {
				commit('SET_PAYLOAD', {
					payload: data.results,
					stateKey: 'statusList'
				})
			})
	},

	/*
	* Get plastic card list
	* */
	fetchPlasticCardList({ commit }, payload) {
		this._vm.$http.get('/1/plastic_cards/', {
			params: {
				...payload,
				page_size: 50
			}
		})
			.then(({ data }) => {
				commit('SET_PAYLOAD', {
					payload: data.results,
					stateKey: 'plasticCardList'
				})
			})
	},

	/*
	* Get credit list
	* */
	fetchCreditsList({ commit }, payload) {
		this._vm.$http.get('/1/credit/', {
			params: {
				...payload,
				page_size: 50
			}
		})
			.then(({ data }) => {
				commit('SET_PAYLOAD', {
					payload: data.results,
					stateKey: 'creditList'
				})
			})
	},

	/*
	* Get branches list
	* */
	fetchBranchesList({ commit }) {
		this._vm.$http.get('/1/filial/', {
			params: {
				page_size: 500,
				type: "filial"
			}
		})
			.then(({ data }) => {
				commit('SET_PAYLOAD', {
					payload: data.results,
					stateKey: 'branchesList'
				})
			})
	},

	/*
	* Get deposit list
	* */
	fetchDepositList({ commit }, payload) {
		this._vm.$http.get('/1/deposit/', {
			params: {
				...payload,
				page_size: 50
			}
		})
			.then(({ data }) => {
				commit('SET_PAYLOAD', {
					payload: data.results,
					stateKey: 'depositList'
				})
			})
	},

	/*
	* Get transfer list
	* */
	fetchTransferList({ commit }, payload) {
		this._vm.$http.get('/1/transfer/', {
			params: {
				...payload,
				page_size: 50
			}
		})
			.then(({ data }) => {
				commit('SET_PAYLOAD', {
					payload: data.results,
					stateKey: 'transferList'
				})
			})
	},

	/*
	* Get financing list
	* */
	fetchFinancingList({ commit }) {
		this._vm.$http.get('/1/finance/retail/', {
			params: {
				page_size: 50
			}
		})
			.then(({ data }) => {
				commit('SET_PAYLOAD', {
					payload: data.results,
					stateKey: 'financingList'
				})
			})
	}
}

export default {
	state,
	mutations,
	actions,
	getters
};
