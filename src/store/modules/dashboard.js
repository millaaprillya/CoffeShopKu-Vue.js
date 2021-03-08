import axios from 'axios'

export default {
  state: {
    income: '',
    orders: []
  },
  mutations: {
    setIncome(state, payload) {
      state.income = payload
      console.log(state.income)
    }
  },
  actions: {
    getIncome(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/dashboard/income`)
          .then(response => {
            console.log(response.data.data)
            context.commit('setIncome', response.data.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
  getters: {
    Income(state) {
      return state.income
    }
  }
}
