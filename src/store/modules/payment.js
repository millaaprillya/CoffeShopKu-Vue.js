import axios from 'axios'

export default {
  state: {
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
    setPayment(state, payload) {
      state.orders = payload.data
      state.totalRows = payload.pagination.totalData
    },
    searchProducts(state, payload) {
      state.search = payload
    }
  },
  // ${process.env.VUE_APP_PORT}
  actions: {
    getHistory(context, payload) {
      console.log(context.state)
      return new Promise((resolve, reject) => {
        axios.get(`  ${process.env.VUE_APP_PORT}/order/`, payload)
        console
          .log(payload)
          .then(response => {
            context.commit('setPayment', response.data)
            resolve(response)
          })
          .catch(error => {
            console.log(error.response)
            reject(error)
          })
      })
    },
    getProductsBycategory(context) {
      console.log(context.state)
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
    getPageProduct(state) {
      return state.page
    },
    getLimitProduct(state) {
      return state.limit
    },
    getDataProduct(state) {
      return state.products
    },
    getTotalRowsProduct(state) {
      return state.totalRows
    },
    getAllDataState(state) {
      return state
    },
    getProduct(state) {
      return state.products
    }
  }
}
