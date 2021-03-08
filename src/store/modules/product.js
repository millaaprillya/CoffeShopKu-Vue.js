import axios from 'axios'
import alert from '../../mixins/alert'

export default {
  mixins: [alert],
  state: {
    limit: 8,
    page: 1,
    products: [],
    totalRows: null,
    product_id: '',
    search: '',
    sort: '',
    category: '',
    payment: []
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    },
    setProductId(state, payload) {
      state.form = payload.data
    },
    changePage(state, payload) {
      state.page = payload
    },
    changeSort(state, payload) {
      state.sort = payload
    },
    searchProducts(state, payload) {
      state.search = payload
    },
    changeCategory(state, payload) {
      state.category = payload
    }
  },
  actions: {
    getProducts(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            ` ${process.env.VUE_APP_PORT}/product/?page=${context.state.page}&limit=${context.state.limit}&search=${context.state.search}&sort=${context.state.sort}`
          )
          .then(response => {
            context.commit('setProduct', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getProductByid(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_PORT}/product/${payload}`)
          .then(response => {
            context.commit('setProduct', response.data.data[0])
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getProductsCategory(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_PORT}/category?page=${context.state.page}&limit=${context.state.limit}&search=${context.state.category}&sort=${context.state.sort}`
          )
          .then(response => {
            context.commit('setProduct', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    addProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_PORT}/product/`, payload)
          .then(response => {
            resolve(response.data.data.msg)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    },
    patchProduct(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_PORT}/product/${payload.id}`,
            payload.dataSet
          )
          .then(response => {
            context.commit('setProduct', response.data.data[0])
            resolve(response.data.data.msg)
          })
          .catch(error => {
            console.log(error)
            reject(error.response)
          })
      })
    },
    productDeleted(context, payload) {
      console.log(payload)
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_PORT}/product/${payload}`)
          .then(response => {
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
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
    getProduct(state) {
      return state.products
    },
    getCategoryNameProduct(state) {
      return state.category
    },
    getPaymentProduct(state) {
      return state.payment
    }
  }
}
