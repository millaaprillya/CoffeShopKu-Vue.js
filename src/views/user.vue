<template>
  <div class="product">
    <div class="centered">
      <Navbar />
      <b-container fluid>
        <b-row clas s="sidebar">
          <b-col xl="4" lg="4" md="12" sm="12" class="voucher-container">
            <b-container>
              <b-card-group class="border-class">
                <center>
                  <ul>
                    <center class="info-promo">Voucher For You</center>
                    <center class="info-promo-1">
                      Coupons will be updated every weeks. Check them out!
                    </center>
                    <Voucher />
                  </ul>
                </center>
              </b-card-group>
            </b-container>
          </b-col>
          <b-col xl="8" lg="8" md="12" sm="12">
            <b-container class="bg-home">
              <div>
                <ul class="header-menu">
                  <li class="nav-item" @click="categoryFood('')">
                    <a>All Product</a>
                  </li>
                  <li class="nav-item" @click="categoryFood('Coffee')">
                    <a>coffee</a>
                  </li>
                  <li class="nav-item" @click="categoryFood('NonCoffe')">
                    <a>Non Coffee</a>
                  </li>
                  <li class="nav-item" @click="categoryFood('Foods')">
                    <a>Foods</a>
                  </li>
                  <li class="nav-item" @click="categoryFood('Desert')">
                    <a>Dersert</a>
                  </li>
                  <li>
                    <b-dropdown
                      id="dropdown-dropright"
                      dropright
                      text="For You"
                      pill
                      variant="outline-secondary"
                    >
                      <b-dropdown-item
                        href="#"
                        @click="handleSort('product_price ASC')"
                        >Harga Terendah</b-dropdown-item
                      >
                      <b-dropdown-item
                        href="#"
                        @click="handleSort('product_price DESC')"
                        >Harga Tertinggi</b-dropdown-item
                      >
                      <b-dropdown-item href="#">Promo</b-dropdown-item>
                    </b-dropdown>
                  </li>
                </ul>
              </div>
              <b-container class="bv-example-row">
                <Card />
              </b-container>

              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="limit"
                @change="handlePageChange"
                class="pagination"
              ></b-pagination>
            </b-container>
          </b-col>
        </b-row>
        <Footer />
      </b-container>
    </div>
  </div>
</template>

<script>
// [1] step pertama import komponen
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import Voucher from '../components/_base/_user/Voucher-user'
import Card from '../components/_base/_user/product'

import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'userHome',
  components: {
    Navbar,
    Footer,
    Voucher,
    Card
  },
  computed: {
    ...mapGetters({
      user: 'setUser',
      products: 'getDataProduct',
      page: 'getPageProduct',
      limit: 'getLimitProduct',
      rows: 'getTotalRowsProduct',
      category: 'getCategoryNameProduct'
    })
  },
  data() {
    return {
      product: [],
      form: {
        category_id: '',
        product_name: '',
        product_image: '',
        product_price: '',
        product_size: '',
        product_list: '',
        product_status: ''
      },
      alert: false,
      isMsg: '',
      product_id: '',
      currentPage: '1'
    }
  },
  created() {
    this.getUserProfile(this.user.user_id)
  },
  methods: {
    ...mapActions(['getUserProfile', 'getProductsCategory', 'getProducts']),
    ...mapMutations([
      'changePage',
      'changeSort',
      'changeCategory',
      'searchProducts',
      'getVoucher',
      'changeSort'
    ]),
    categoryFood(category) {
      this.changeCategory(category)
      this.getProductsCategory()
    },
    handlePageChange(numberPage) {
      this.changePage(numberPage)
      // console.log(numberPage)
      // this.page = numberPage
      this.getProducts()
    },
    handleSort(sort) {
      this.changeSort(sort)
      this.getProducts()
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

.centered {
  text-align: center;
}
.voucher-container {
  box-sizing: border-box;
  border-right: 5px;
}
.card-product {
  width: 160px;
  height: 300.5px;
  margin: 4%;
  padding: 2%;
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 150px;
}
.card-title {
  font-family: 'Josefin Sans', sans-serif;
  font-weight: bold;
  text-align: center;
  color: #000000;
  font-style: normal;
  font-size: 20px;
}
.rounded-circle {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10%;
}
.card-title:hover {
  color: brown;
  font-weight: bold;
  font-size: 20px;
}
.text-muted {
  color: #6a4029;
}
.header-menu li {
  margin-top: 1%;
  margin-left: 5%;
  font-family: Poppins;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
}
.info-promo {
  margin: 3%;
  margin-left: 10%;
  font-family: 'Source Serif Pro', serif;
  padding-bottom: 4%;
  color: #6a4029;
  font-family: Rubik;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height */
  color: #6a4029;
}
.info-promo-1 {
  margin: 5%;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
  color: #000000;
}
.voucher-container {
  border-right: 5px solid #f7f7f7;
  padding: 0px;
  box-shadow: 0px 5px 5px #f7f7f7;
}
.add-product {
  margin-left: 20%;
  margin-top: 5%;
  text-align: center;
  width: 600px;
  height: 70px;
  border-radius: 20px;
  background: #ffba33;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 120% */
  text-align: center;
  color: #6a4029;
}
.pagination {
  margin-top: 5%;
}
@media only screen and (max-width: 1094px) {
  .voucher-container {
    display: none;
  }
  .bg-home {
    margin-left: 25%;
    margin-right: 25%;
  }
  .add-product {
    margin-top: 5%;
    text-align: center;
    width: 300px;
    height: 70px;
    border-radius: 20px;
    background: #ffba33;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    /* identical to box height, or 120% */
    text-align: center;
    color: #6a4029;
  }
  .edit-data {
    margin-left: 5px;
  }
}
.add-voucher {
  margin-top: 10%;
  width: 300px;
  height: 70px;
  left: 156px;
  top: 1110px;
  border-radius: 20px;
  background: #ffba33;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
}
</style>
