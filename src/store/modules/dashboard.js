import axios from 'axios'

export default {
  state: {
    income: {},
    orders: [],
    form: {
      order_id: '',
      history_id: '',
      product_id: '',
      product_price: '',
      order_qty: '',
      order_price: '',
      order_total: ''
    }
  },
  mutations: {
    setIncome(state, payload) {
      state.income = payload.data.data
      console.log(state)
    }
  },
  actions: {
    getIncome(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/dashboard/income`)
          .then(response => {
            console.log(response)
            context.commit('setIncome', response.data.data[0])
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    setIncome_(state) {
      return state.income
    }
  }
}
