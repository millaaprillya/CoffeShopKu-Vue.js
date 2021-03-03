import axios from 'axios'

export default {
  state: {
    payment: [],
    orders: [],
    history: [],
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
    setHistory(state, payload) {
      state.history = payload.data
      console.log(state.history)
    },
    resetOrder(state) {
      state.orders = []
    },
    addOrder(state, payload) {
      state.orders = [...state.orders, payload]
    },
    setPayment(state, payload) {
      state.orders = [...state.orders, payload]
      console.log(state.orders)
    },
    searchProducts(state, payload) {
      state.search = payload
    }
  },
  actions: {
    ChekoutProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/order/${payload.userId}`, {
            orders: payload.orders
          })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            console.log(error.response)
            reject(error)
          })
      })
    },
    getHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/order/`, payload)
          .then(response => {
            context.commit('setPayment', response.data)
            resolve(response.data.data)
          })
          .catch(error => {
            console.log(error.response)
            reject(error)
          })
      })
    },
    getHistoryPayment(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/order/history/${payload}`)
          .then(response => {
            // console.log(response)
            context.commit('setHistory', response.data)
            resolve(response.data.data[0])
          })
          .catch(error => {
            console.log(error.response)
            reject(error)
          })
      })
    },
    getProductsBycategory(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_PORT}/product?page=${context.state.page}&limit=${context.state.limit}&search=${context.state.search}&sort=${context.state.sort}`
          )
          .then(response => {
            // console.log(response)
            context.commit('setProduct', response.data)
            resolve(response)
            //   state.totalRows = response.data.pagination.totalData
            //   state.product = response.data.data
          })
          .catch(error => {
            console.log(error.response)
            reject(error)
          })
      })
    }
  },

  getters: {
    getOrders(state) {
      return state.orders
    },
    getHistory(state) {
      return state.history
    }
  }
}
