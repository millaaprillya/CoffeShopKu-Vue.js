import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Product from './modules/product'
import Voucher from './modules/voucher'
import Profile from './modules/profile'
import Payment from './modules/payment'
import dashboard from './modules/dashboard'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Product, Voucher, Profile, Payment, dashboard },
  state: {
    name: 'Milla aprillya indriyani'
  },
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user']
    })
  ]
})
