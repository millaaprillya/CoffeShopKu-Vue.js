<template>
  <b-row class="mr-card">
    <b-container class="bv-example-row">
      <b-row>
        <div
          xl="3"
          lg="4"
          md="6"
          sm="12"
          class="card-product "
          v-for="(item, index) in products"
          :key="index"
        >
          <div class="card-1 mr-5">
            <img
              v-bind:title="item.product_name"
              :src="'http://localhost:3000/' + item.product_image"
              class="rounded-circle"
              width="125"
              height="125a"
              alt="..."
            />
            {{ product_image }}
            <b-col class="card-title">
              {{ item.product_name }}
            </b-col>
            <b-col>
              <p class="card-text">Rp.{{ item.product_price }}</p>
            </b-col>
            <b-container class="bv-example-row mb-3">
              <b-row cols="2">
                <b-col>
                  <button class="button button5" @click="productAbout(item)">
                    <img src="../../../assets/property/Vector.png" alt="" />
                  </button>
                </b-col>
                <b-col>
                  <button
                    class="button button5"
                    @click="deleteProduct(item.product_id)"
                  >
                    D
                  </button>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </div>
      </b-row>
    </b-container>
  </b-row>
</template>

<script>
// import axios from 'axios'
// import { alert } from '../../../mixins/alert'
import { mapGetters, mapActions } from 'vuex'
export default {
  // mixins: [alert],
  name: 'Product',
  computed: {
    // rows() {
    //   return this.totalRows
    // },
    ...mapGetters({
      products: 'getDataProduct'
    })
  },
  data() {
    return {
      // product: [],
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
      product_id: ''
    }
  },
  created() {
    this.getProducts()
    console.log('hello')
    console.log(this.getProducts)
  },
  methods: {
    ...mapActions(['getProducts', 'postProduct', 'productDeleted']),
    deleteProduct(item) {
      this.productDeleted(item)
      this.getProducts()
      console.log(item)
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
      console.log(numberPage)
      this.page = numberPage
      this.getProduct()
    },
    productAbout(data) {
      console.log(data)
      this.form = data
      this.$router.push({
        name: 'aboutProduct',
        params: { id: data.product_id }
      })
    },
    handleFile(event) {
      console.log(event)
      this.form.product_image = event.target.files[0]
    },
    addProductform() {
      this.$router.push({
        name: 'addProduct'
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
  font-family: Poppins;
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 101.34%;
  /* or 22px */
  text-align: center;
  color: #000000;
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
.card-text {
  color: #6a4029;
  font-size: 20px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  text-align: center;
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
.button5 {
  border-radius: 50%;
}
.button4 {
  border-radius: 50%;
}
.button {
  margin-top: 5px;
  background-color: #6a4029; /* Green */
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 10px;
  margin: 4px 2px;
  cursor: pointer;
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
