import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'

import aboutProduct from '../views/About.vue'
import payment from '../components/_base/_user/payment.vue'
import history from '../components/_base/_user/history.vue'
import userHome from '../views/user.vue'
import orderDetail from '../views/detailOrder.vue'
import addVoucher from '../views/admin/add_voucher.vue'
import login from '../views/auth/login.vue'
import register from '../views/auth/register.vue'
import user from '../views/auth/user.vue'
import dashboard from '../views/dasboard/dashboard.vue'
// import payment from '../views/admin/payment'
import addProduct from '../components/_base/_admin/Addproduct.vue'
import store from '../store/index'

Vue.use(VueRouter)
const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: { requiresAuth: true }
  },
  {
    path: '/aboutProduct/:id',
    name: 'aboutProduct',
    component: aboutProduct,
    meta: { requiresAuth: true }
  },
  {
    path: '/payment/:id',
    name: 'payment',
    component: payment,
    meta: { requiresAuth: true }
  },
  {
    path: '/addVoucher/',
    name: 'addVoucher',
    component: addVoucher,
    meta: { requiresAuth: true }
  },
  {
    path: '/',
    name: 'userHome',
    component: userHome,
    meta: { requiresAuth: true }
  },
  {
    path: '/orderDetail/:id',
    name: 'orderDetail',
    component: orderDetail,
    meta: { requiresAuth: true }
  },
  {
    path: '/payment/',
    name: 'payment',
    component: payment,
    meta: { requiresAuth: true }
  },
  {
    path: '/history/',
    name: 'history',
    component: history,
    meta: { requiresAuth: true }
  },
  {
    path: '/addProduct/',
    name: 'addProudct',
    component: addProduct
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/login/',
    name: 'login',
    component: login,
    meta: { requiresVisitor: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/dashboard'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
