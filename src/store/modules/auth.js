import axios from 'axios'
import router from '../../router/index'
export default {
  state: {
    //meyimpan data user
    user: {},
    token: localStorage.getItem('token') || null
  },
  mutations: {
    setUser(state, payload) {
      console.log('Proses mutations setUser')
      state.user = payload
      state.token = payload.token
      console.log(payload)
    },
    delUser(state) {
      state.user = {}
      state.token = null
    }
  },
  actions: {
    login(context, payload) {
      return new Promise((resolve, reject) => {
        console.log('Fungsi login yang berada di store vuex')
        console.log(payload)
        axios
          .post(`${process.env.VUE_APP_PORT}/user/login`, payload)
          .then(result => {
            // console.log(result)
            context.commit('setUser', result.data.data)
            localStorage.setItem('token', result.data.data.token)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error.response)
          })
      })
    },
    register(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(` ${process.env.VUE_APP_PORT}/user/register`, payload)
          .then(response => {
            resolve(response.data.msg)
          })
          .catch(error => {
            reject(error.response.data.msg)
          })
      })
    },
    logout(context) {
      localStorage.removeItem('token')
      localStorage.removeItem('cart')
      localStorage.removeItem('vuex')
      context.commit('delUser')
      router.push('/login')
    },
    interceptorRequest(context) {
      console.log('interceptor request Works !')
      axios.interceptors.request.use(
        function(config) {
          config.headers.Authorization = `Bearer ${context.state.token}`
          // Do something before request is sent
          return config
        },
        function(error) {
          // Do something with request error
          return Promise.reject(error)
        }
      )
    },
    interceptorResponse(context) {
      console.log('interceptor response Works !')
      axios.interceptors.response.use(
        function(response) {
          // Any status code that lie within the range of 2xx cause this function to trigger
          // Do something with response data
          return response
        },
        function(error) {
          // Any status codes that falls outside the range of 2xx cause this function to trigger
          // Do something with response error
          if (
            error.response.data.status === 403 &&
            (error.response.data.msg === 'invalid token' ||
              error.response.data.msg === 'invalid signature' ||
              error.response.data.msg === 'jwt expired' ||
              error.response.data.msg === 'jwt malformed')
          ) {
            context.dispatch('logout')
            alert(error.response.data.msg)
          }
          return Promise.reject(error)
        }
      )
    }
  },
  getters: {
    setUser(state) {
      return state.user
    },
    isLogin(state) {
      return state.token !== null
    }
  }
}
