<template>
  <aside>
    <p class="aside-text">
      Cupon will be updated every weeks. <br />
      Check them out!
    </p>
    <div class="aside-card" v-for="(item, index) in voucher" :key="index">
      <div class="card-item row">
        <div class="card-image col-3">
          <img src="../../../assets/voucher/voucher1.png" />
        </div>
        <div class="card-text col-9">
          <strong>{{ item.voucher_name }}</strong>
          <p>{{ item.voucher_list }}</p>
        </div>
      </div>
    </div>

    <div class="aside-btn">
      <router-link to="/payment" class="aside-btn">Apply Coupon</router-link>
    </div>
    <div class="aside-terms">
      <ul>
        <li><strong>Terms and Condition</strong></li>
        <li>1. You can only apply 1 coupon per day</li>
        <li>2. it only for dine in</li>
        <li>3. Buy 1 get 1 only for new user</li>
        <li>4. Should make member card to apply coupon</li>
      </ul>
      <p></p>
    </div>
  </aside>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    // AddVoucher
  },
  computed: {
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      voucher: [],
      form: {
        voucher_name: '',
        voucher_list: '',
        voucher_status: ''
      },
      alert: false,
      isMsg: '',
      voucher_id: '',
      currentPage: '1',
      totalRows: 'null',
      limit: 8,
      page: 1
    }
  },
  created() {
    this.getVoucher()
    console.log(this.getVoucher)
  },
  methods: {
    getVoucher() {
      axios
        .get('http://localhost:3000/voucher')
        .then(response => {
          console.log(response)
          this.voucher = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    postProduct() {
      console.log(this.form)
      axios
        .post('http://localhost:3000/voucher', this.form)
        .then(response => {
          console.log(response)
          this.alert = true
          this.isMsg = response.data.msg
          this.postVoucher()
        })
        .catch(error => {
          console.log(error.response)
        })
    },

    deleteVoucher(voucher_id) {
      console.log(voucher_id)
    },

    handlePageChange(numberPage) {
      this.page = numberPage
      this.getProduct()
    },
    productAbout(voucher_id) {
      this.$router.push({ name: 'aboutProduct', params: { id: voucher_id } })
    },
    addVoucher() {
      this.$router.push({
        name: 'addVoucher'
      })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&family=Rubik:wght@300;400;500;600&display=swap');
.container-fluid header {
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-around;
}
.container-fluid {
  padding: 0px;
}
header ul.header-brand {
  margin-left: 10px;
}
ul.header-brand li {
  display: inline-block;
}
ul.header-brand li {
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 20px;
}
.img-chat span.badge {
  width: 15px;
  height: 15px;
  background-color: #6a4029;
  color: white;
  border-radius: 50px;
  position: absolute;
  top: 28px;
  right: 15.5%;
}
ul.header-menu li {
  display: inline-block;
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  padding-right: 30px;
  width: auto;
}
ul.header-menu li a {
  text-decoration: none;
  color: #6a4029;
}
ul.header-menu li a:hover {
  font-weight: 500;
}
ul.header-menu li.home a {
  font-weight: bold;
}
.header-menu li.img-user img {
  border-radius: 50%;
}
.img-search input {
  border-radius: 30px;
  background-color: #efeeee;
  border: none;
  text-align: center;
}
.img-search input:focus {
  outline: none;
  color: #6a4029;
}
.form-control:focus {
  box-shadow: 0 0 0 0.2rem rgba(110, 62, 33, 0.274);
  background-color: #dbdbdb;
}
.img-search img {
  position: absolute;
  margin-top: 10px;
  margin-left: 10px;
}
.container-fluid main {
  display: flex;
  border-top: 1px solid #dbdbdb;
}

main aside {
  flex: 1;
  padding: 20px;
  text-align: center;
}

aside .aside-title {
  font-family: 'Rubik', sans-serif;
  font-size: 25px;
  font-weight: bold;
  color: #6a4029;
}

aside .aside-text {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  margin-bottom: 70px;
}

aside .aside-card {
  background-color: #88b787;
  border-radius: 20px;
  width: 335px;
  height: 109px;
  padding: 10px;
  margin-top: 20px;
}
.card-item .card-text {
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  text-align: left;
  padding: 10px;
}

aside .aside-btn {
  margin-top: 50px;
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  background-color: #6a4029;
  color: white;
}

aside .aside-terms {
  text-align: left;
  font-size: 12px;
  margin-top: 100px;
}
.aside-terms ul {
  padding: 0;
  list-style-type: none;
}

.flex-main section {
  border-left: 1px solid #dbdbdb;
  padding-left: 70px;
  /* padding-right: px; */
}
main .flex-main {
  flex: 3;
}

section ul.section-menu li {
  display: inline-block;
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 60px;
}

.note {
  font-family: 'Poppins', sans-serif;
  color: #6a4029;
  padding-top: 20px;
  padding-bottom: 20px;
}

section .card-menu {
  -webkit-box-shadow: 3px 3px 30px 0px #ccc;
  -moz-box-shadow: 3px 3px 30px 0px #ccc;
  box-shadow: 3px 3px 30px 0px #ccc;
  border-radius: 30px;
  width: 80%;
  margin-top: 40px;
  margin-bottom: 20px;
}
.card-menu span.badge {
  position: absolute;
  z-index: 2;
  left: 60%;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
  font-weight: bold;
}
.card-menu .name-menu {
  font-weight: 900;
  font-family: 'Poppins', sans-serif;
  text-align: center;
}
.price-menu {
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: #6a4029;
  text-align: center;
  padding-left: 20px;
}
section .list-menu {
  padding-left: 30px;
  padding-right: 70px;
}

.card-menu img {
  border-radius: 50%;
  position: relative;
  left: 6px;
  bottom: 30px;
  width: 90%;
}

.container footer {
  display: flex;
  padding-top: 80px;
  padding-bottom: 80px;
}

.footer-background {
  background-color: #f8f8f8;
}

footer .footer-profile {
  flex: 4;
}

footer .footer-product {
  flex: 1;
  height: 50px;
}

footer .footer-engage {
  flex: 1;
}

ul.footer-brand li {
  display: inline-block;
}

ul.footer-medsos li {
  display: inline-block;
  width: 50px;
}

ul.footer-brand li.text,
.label-engage,
.label-product {
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  color: black;
}
.footer-profile p.profile-text {
  padding-left: 40px;
  line-height: 30px;
  font-family: 'Rubik', sans-serif;
  color: #4f5665;
  font-weight: 400;
}
.footer-profile p.text-copy {
  font-family: 'Rubik', sans-serif;
  padding-left: 40px;
  color: darkgrey;
  font-size: 16px;
}
footer .footer-product,
footer .footer-engage {
  list-style-type: none;
  line-height: 40px;
  font-family: 'Rubik', sans-serif;
  color: #4f5665;
  font-weight: 400;
  text-align: left;
}

@media only screen and (max-width: 600px) {
  .container-fluid header {
    flex-direction: column;
    text-align: center;
  }
  header ul {
    margin-left: 0px;
    padding-left: 0px;
  }
  header ul.header-brand {
    margin: 20px;
  }
  ul.header-brand li.text {
    font-size: 30px;
  }
  ul.header-menu li {
    padding-top: 20px;
  }
  .img-search img {
    display: none;
  }
  .container-fluid main {
    flex-direction: column;
    align-items: center;
  }
  aside .aside-text {
    margin-bottom: 20px;
  }
  aside .aside-btn {
    margin-top: 20px;
  }
  aside .aside-terms {
    display: none;
  }
  .flex-main section {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-top: 1px solid #ccc;
    background-color: #f9f9f9;
  }
  section ul.section-menu li {
    font-size: 17px;
    padding: 10px;
  }
  .container footer {
    padding-top: 40px;
    flex-direction: column;
  }
  section .card-menu {
    width: 70%;
    margin-top: 40px;
    margin-bottom: 20px;
    margin-left: 50px;
    text-align: center;
  }
  .card-menu .name-menu {
    font-weight: 700;
  }
  .price-menu {
    padding-left: 0px;
  }
  .card-menu img {
    border-radius: 50%;
    position: relative;
    left: 0px;
    bottom: 30px;
    width: 90%;
  }
  .footer-background {
    background-color: #f2f2f2;
  }
  footer .footer-product,
  footer .footer-engage {
    border-top: 1px solid #dbdbdb;
  }
  .card-menu span.badge {
    left: 70%;
  }
  .img-chat span.badge {
    top: 175px;
    right: 35%;
  }
}
</style>
