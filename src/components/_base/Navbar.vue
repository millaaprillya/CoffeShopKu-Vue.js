<template>
  <div>
    <nav class="navbar  pb-3 navbar-expand-lg">
      <div class="container ">
        <a class="navbar-brand navbar-logo mr-5" href="#"
          ><img src="../../assets/logo.png" alt="" />
          <span class="navbar__title pl-lg-2 position-relative"
            >Coffee Shop</span
          >
        </a>
        <!-- <p>{{ user }}</p> -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto ml-lg-auto pt-lg-2 ml-5">
            <li class="nav-item">
              <router-link class="pr-lg-4 nav-link" to="/dashboard"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="pr-lg-4 nav-link" to="/">Product</router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="pr-lg-4 nav-link"
                v-if="user.user_role === 1"
                to="/income"
                >Dashboard</router-link
              >
              <router-link class="pr-lg-4 nav-link" to="/payment" v-else
                >Your Cart</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="pr-lg-4 nav-link"
                :to="{ name: 'history', params: { id: profile.user_id } }"
                v-if="user.user_role === 2"
                >History</router-link
              >
            </li>

            <li>
              <form
                class="form-inline  ml-5"
                mr="5"
                xl="2"
                lg="12"
                md="12"
                sm="12"
              >
                <router-link to="/">
                  <input
                    type="text"
                    placeholder=" Search"
                    aria-label="Search"
                    v-model="search"
                    @keydown.enter.prevent="searchProduct"
                  />
                </router-link>
              </form>
            </li>
          </ul>
        </div>
        <div>
          <div
            class="d-flex justify-content-around mt-2 align-self-lg-center mb-2 mb-lg-0 pt-lg-1 ml-5"
          >
            <a
              href="#"
              class="position-relative mr-lg-4"
              mr="5"
              xl="2"
              lg="12"
              md="12"
              sm="12"
              ><img
                class="chat__Logo"
                alt="chatLogo"
                src="../../assets/property/chat.png"
            /></a>
            <a
              href="#"
              class="position-relative mr-lg-4"
              mr="5"
              xl="2"
              lg="12"
              md="12"
              sm="12"
            >
            </a>
            <a class="nav-link"> {{ profile.user_name }}</a>
            <b-dropdown class="ml-2">
              <b-dropdown-item class="bg-white" to="/user">
                <img
                  src="../../assets/nav/user.png"
                  class=" rounded-circle mr-2 ml-2"
                />Profile
              </b-dropdown-item>
              <b-dropdown-item @click="logout"
                ><img
                  src="../../assets/property/logout.png"
                  class=" rounded-circle mr-2"
                />
                Logout
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Navbar',
  data() {
    return {
      search: ''
    }
  },
  created() {
    this.getUserProfile(this.user.user_id)
  },
  methods: {
    ...mapActions([
      'logout',
      'getUserProfile',
      'getProducts',
      'getHistoryPayment'
    ]),
    ...mapMutations(['searchProducts']),
    handleLogout() {
      console.log('anda berasil login').this.logout()
    },
    searchProduct() {
      this.searchProducts(this.search)
      this.getProducts()
    },
    historyPage(profile) {
      this.$router.push({
        name: 'history',
        params: { id: profile.user_id }
      })
    }
  },
  computed: {
    ...mapGetters({
      user: 'setUser',
      profile: 'setProfile'
    })
  }
}
</script>
<style>
.profile-nav,
.button-content {
  background: white;
}
.nav-link {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 19px;

  color: #0b132a;
}
.navbar__title {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 24px;
  /* identical to box height */

  color: #0b132a;
}
.navbar {
  margin: 2%;
  border-bottom: 3px solid #f7f7f7;
}
.costumer__Logo,
.chat__Logo,
.form-inline {
  margin-right: 50%;
}
.navbar-top {
  background: url('../../assets/nav/Capture.png');
}
.nav-admin {
  padding: 20px 20px;

  box-sizing: border-box;
  box-shadow: 10px 10px 10px #f7f7f7;
}

.CoffeShop {
  font-family: 'Kalam', cursive;
  font-size: 160%;
}
.header-menu li {
  font-family: 'Kalam', cursive;
  display: inline-block;
  padding-right: 0.9rem;
  padding-left: 0.9rem;
  font-size: larger;
  text-align: right;
  color: black;
}
.form-control {
  border-radius: 10%;
}
.form-inline {
  border-radius: 50%;
  border-color: yellowgreen;
}
@media only screen and (max-width: 1111px) {
  .sc {
    display: none;
    flex: 1;
  }
}
</style>
