import axios from 'axios'

export default {
  state: {
    voucher: [],
    totalRows: null
  },
  mutations: {
    setVoucher(state, payload) {
      state.voucher = payload.data
      state.totalRows = payload.pagination.totalData
    },
    changePage(state, payload) {
      state.page = payload
    }
  },
  actions: {
    getVoucher(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://localhost:3000/voucher=${context.state.voucher}`)
          .then(response => {
            context.commit('setVoucher', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    getDataVoucher(state) {
      return state.voucher
    },
    getAllDataState(state) {
      return state
    }
  }
}
