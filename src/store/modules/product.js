import axios from 'axios'

export default {
  state: {
    limit: 8,
    page: 1,
    products: [],
    totalRows: null,
    product_id: '',
    search: '',
    sort: '',
    category: ''
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
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
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    }
  },
  // ${process.env.VUE_APP_PORT}
  actions: {
    getProducts(context) {
      console.log(context.state)
      return new Promise((resolve, reject) => {
        axios
          .get(
            ` ${process.env.VUE_APP_PORT}/product?page=${context.state.page}&limit=${context.state.limit}&search=${context.state.search}&sort=${context.state.sort}`
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
    getProductsCategory(context) {
      console.log(context.state)
      return new Promise((resolve, reject) => {
        axios
          .get(
            ` http://localhost:3000/category?page=${context.state.page}&limit=${context.state.limit}&search=${context.state.search}&sort=${context.state.sort}`
          )
          .then(response => {
            context.commit('changeSort', response.data)
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
          .post('http://localhost:3000/product', payload)
          .then(response => {
            console.log(response.data)
            resolve(response.data.data)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchProduct(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`http://localhost:3000/product/${payload.id}`, payload.dataSet)
          .then(response => {
            context.commit('setProduct', response.dataSet)
            resolve(response.dataSet)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    productDeleted(context, payload) {
      console.log(payload)
      //  context itu di ambil dari state
      return new Promise((resolve, reject) => {
        axios
          .delete(`http://localhost:3000/product/${payload.product_id}`)
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
    getAllDataState(state) {
      return state
    },
    getProduct(state) {
      return state.products
    },
    getCategoryNameProduct(state) {
      return state.category
    }
  }
}
