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
                  <li>favorite Product</li>
                  <li>coffee</li>
                  <li>Non Coffee</li>
                  <li>Foods</li>
                  <li>Add On</li>
                </ul>
              </div>
              <b-container class="bv-example-row">
                <b-row>
                  <div
                    xl="3"
                    lg="4"
                    md="6"
                    sm="12"
                    class="card-product "
                    v-for="(item, index) in product"
                    :key="index"
                  >
                    <div class="card-1 mr-5">
                      <img
                        :src="'http://localhost:3000/' + item.product_image"
                        class="rounded-circle"
                        width="125"
                        height="100"
                        alt="..."
                      />

                      <p class="card-title">
                        {{ item.product_name }}
                      </p>
                      <p class="card-text">
                        <small class="text-muted"
                          >Rp. {{ item.product_price }}</small
                        >
                      </p>
                      <button class="edit-data" @click="productOrder(item)">
                        + Add
                      </button>
                    </div>
                  </div>
                </b-row>
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
import Navbar from '../components/_base/_dashboard/Navbar'
import Footer from '../components/_base/Footer'
import Voucher from '../components/_base/_user/Voucher-user'
import axios from 'axios'

export default {
  name: 'Product',
  // [2] step 2 mendaftarkan komponen yang sudah kita import
  components: {
    Navbar,
    Footer,
    Voucher
  },
  computed: {
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      product: [],
      form: {
        category_id: '',
        product_name: '',
        product_price: '',
        product_size: '',
        product_list: '',
        product_status: ''
      },
      alert: false,
      isMsg: '',
      product_id: '',
      currentPage: '1',
      totalRows: 'null',
      limit: 8,
      page: 1
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    getProduct() {
      axios
        .get(
          `${process.env.VUE_APP_URL}product?page=${this.page}&limit=${this.limit}`
        )
        .then(response => {
          console.log(response)
          this.totalRows = response.data.pagination.totalData
          this.product = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    postProduct() {
      console.log(this.form)
      axios
        .post(`${process.env.VUE_APP_URL}product`, this.form)
        .then(response => {
          console.log(response)
          this.alert = true
          this.isMsg = response.data.msg
          this.getProduct()
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    //  pr
    deleteProduct(item) {
      axios
        .delete(`http://localhost:3000/product/${item.product_id}`)
        .then(response => {
          console.log(response)
          this.alert = true
          this.isMsg = response.data.msg
          this.getProduct()
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    setProduct(data) {
      console.log(data)

      this.form = data
      this.product_id = data.product_id
    },
    pacthProduct() {
      console.log(this.form)
    },
    handlePageChange(numberPage) {
      this.changePage(numberPage)
      this.getProduct()
    },
    productOrder(data) {
      console.log(data)
      this.form = data
      this.$router.push({
        name: 'orderDetail',
        params: { id: data.product_id }
      })
    }
  }
}
</script>

<style scoped>
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
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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
.header-menu {
  font-family: Poppins;
}
.info-promo {
  margin: 10%;
  margin-left: 10%;

  font-family: 'Source Serif Pro', serif;
  font-size: 150%;
  padding-bottom: 5%;
  color: #6a4029;
}
.voucher-container {
  border-right: #f7f7f7;
  border-right: 1px solid;
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
</style>
