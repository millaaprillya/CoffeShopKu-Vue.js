<template>
  <div>
    <nav class="navbar pt-3 pb-4 navbar-expand-lg">
      <div class="container ">
        <a class="navbar-brand navbar-logo" href="#"
          ><img src="../../assets/logo.png" alt="" />
          <span class="navbar__title pl-lg-2 position-relative"
            >Coffee Shop</span
          >
        </a>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto ml-lg-auto pt-lg-2">
            <li class="nav-item">
              <router-link class="pr-lg-4 nav-link" to="/dashboard"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="pr-lg-4 nav-link" to="/">Product</router-link>
            </li>
            <li class="nav-item">
              <router-link class="pr-lg-4 nav-link" to="/payment"
                >Your Cart</router-link
              >
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/history">History</router-link>
            </li>
          </ul>
          <div
            class="d-flex justify-content-around mt-2 align-self-lg-center mb-2 mb-lg-0 pt-lg-1"
          >
            <form class="form-inline" mr="5" xl="2" lg="12" md="12" sm="12">
              <router-link to="/">
                <input
                  type="text"
                  placeholder=" Search"
                  aria-label="Search"
                  @keydown.enter.prevent="searchProduct"
                />
              </router-link>
            </form>
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
              ><img
                class="costumer__Logo"
                alt="costumerLogo"
                src="../../assets/nav/user.png"
            /></a>
            <a
              ><img
                class="costumer__Logo"
                alt="costumerLogo"
                src="../../assets/property/logout.png"
            /></a>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style>
.nav-item,
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

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Navbar',
  methods: {
    ...mapActions(['logout']),
    handleLogout() {
      console.log('anda berasil login').this.logout()
    }
  }
}
</script>
