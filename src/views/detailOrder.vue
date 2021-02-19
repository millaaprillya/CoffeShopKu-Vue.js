<template>
  <div>
    <Navbar />

    <header>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="product__detailsOne">
              <div class="breadcrumb__details mt-4 mt-lg-3">
                <a class="breadcrumb__listItem" href="#">Favorite & Promo</a>
                <a class="breadcrumb__listItem active" href="#">
                  > {{ form.product_name }}</a
                >
              </div>
              <div class="image__fit">
                <img
                  :src="'http://localhost:3000/' + form.product_image"
                  class="rounded-circle"
                  width="250"
                  height="250"
                />
              </div>
            </div>
            <!-- Dekstop Display -->
            <section
              class="d-none d-lg-block delivery__content p-lg-4 col-lg-12 mt-lg-4"
            >
              <h2 class="tittle_delivTime pt-lg-3 mb-lg-4">
                Delivery and Time
              </h2>
              <div class="delivey__category mb-lg-4 ml-lg-2">
                <button class="option__delivCatagory active">Dine in</button>
                <button class="option__delivCatagory">Door Delivery</button>
                <button class="option__delivCatagory">Pick up</button>
              </div>
              <form class="ml-lg-2">
                <div class="form-group row mb-lg-4 py-lg-3">
                  <label for="delivery__option" class="col-lg-4 col-form-label"
                    >Now</label
                  >
                  <div class="col-lg-6">
                    <button class="option__deliv active">Yes</button>
                    <button class="option__deliv">No</button>
                  </div>
                </div>
                <div class="form-group row pb-lg-2">
                  <label for="setTime" class="col-lg-4 col-form-label"
                    >Set Time</label
                  >
                  <div class="col-lg-8">
                    <input
                      type="text"
                      placeholder="Enter time for reservation"
                      class="form-control"
                      id="setTime"
                    />
                  </div>
                </div>
              </form>
            </section>
            <!-- ========================================================= -->
          </div>
          <div class="col-lg-6">
            <div class="Product__detailsTwo">
              <h1
                class="titleProduct__details mt-3 mt-xl-5 pt-xl-5 mb-3 mb-lg-4"
              >
                {{ form.product_name }}
              </h1>
              <p class="descProduct__details pr-xl-2 pl-lg-2 ml-lg-4 mb-lg-4">
                {{ form.product_list }}
              </p>
              <p class="descDelivery__product pl-lg-2 ml-lg-4">
                Delivery only on <strong>Monday to friday</strong> at
                <strong>1 - 7 pm</strong>
              </p>
              <div
                class="d-flex align-items-center flex-column flex-lg-row pl-lg-2 ml-lg-4 mt-lg-4"
              >
                <div
                  class="d-flex align-items-center order-2 order-lg-1 mt-2 mb-4 mt-lg-2 mb-lg-5 inputProduct__range"
                >
                  <button type="button" class="minbtn">
                    <svg
                      style="text-align: center"
                      width="2em"
                      height="1.4em"
                      viewBox="0 0 16 16"
                      class="bi bi-dash-circle"
                      fill="red"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                      />
                    </svg>
                  </button>
                  <input
                    class="inputbtn"
                    max="10"
                    min="0"
                    type="text"
                    readonly
                    value="2"
                  />
                  <button type="button" class="plusbtn">
                    <svg
                      width="2em"
                      style="text-align: center"
                      height="1.4em"
                      viewBox="0 0 16 16"
                      class="bi bi-plus-circle"
                      fill="#6A4029"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                      />
                    </svg>
                  </button>
                </div>
                <h2
                  class="priceTag__Product order-1 order-lg-2 pt-lg-2 ml-lg-auto mb-lg-5"
                >
                  Rp. {{ form.product_price }}
                </h2>
              </div>
            </div>
            <section
              class="d-block d-md-none delivery__content p-4 p-lg-4 col-lg-12 mt-lg-5"
            >
              <!-- Mobile Display -->
              <h2 class="tittle_delivTime pt-lg-3 mb-lg-4">
                Delivery and Time
              </h2>
              <div class="title-method mb-4">Choose Delivery Methods</div>
              <div class="method-choice-1 mt-3 mb-3">
                <button class="method-buttom-1">Dine in</button>
                <button class="method-buttom-1">Door Delivery</button>
                <button class="method-buttom-1">XL</button>
              </div>
              <form class="ml-lg-2">
                <div class="form-group row mb-lg-4 py-lg-3">
                  <label for="delivery__option" class="col-lg-4 col-form-label"
                    >Now</label
                  >
                  <div class="col-lg-6">
                    <button class="option__deliv active">Yes</button>
                    <button class="option__deliv">No</button>
                  </div>
                </div>
                <div class="form-group row pb-lg-2">
                  <label for="setTime" class="col-lg-4 col-form-label"
                    >Set Time</label
                  >
                  <div class="col-lg-8">
                    <input
                      type="text"
                      placeholder="Enter time for reservation"
                      class="form-control"
                      id="setTime"
                    />
                  </div>
                </div>
              </form>
            </section>
            <!-- ========================================================= -->

            <!-- Dekstop Display -->
            <div class="button__Cart d-none d-lg-block">
              <button class="col-12 btn__toCartnStaf mb-lg-4" type="button">
                Add to Cart
              </button>
              <button class="col-12 btn__toCartnStaf" type="button">
                Ask a Staff
              </button>
            </div>
            <!-- ===================================== -->
          </div>
          <div
            style="padding: 0 !important"
            class="d-flex col-lg-12 flex-lg-row flex-column mb-4 align-items-center"
          >
            <div class="col-lg-5 mt-4 mb-4 mb-lg-0 mt-lg-5">
              <div class="catagory__sizeProduct py-3 py-xl-4">
                <h2 class="title__chooseSize">Choose a size</h2>
                <div class="button-size">
                  <button class="size">R</button>
                  <button class="size">L</button>
                  <button class="size">XL</button>
                </div>
              </div>
            </div>
            <!-- Mobile Display -->
            <div class="button__Cart col-sm-12 d-block d-md-none">
              <button class="btn__toCartnStaf mb-3 mb-lg-4" type="button">
                Add to Cart
              </button>
              <button class="btn__toCartnStaf" type="button">
                Ask a Staff
              </button>
            </div>
            <!-- ================================== -->
            <div class="col-lg-7 mt-4 ml-lg-4 mt-lg-5">
              <div class="detail_checkoutProduct py-4 py-lg-3 py-xl-4 px-lg-5">
                <div class="d-flex flex-column flex-lg-row align-items-center">
                  <img
                    :src="'http://localhost:3000/' + form.product_image"
                    width="100"
                    height="100"
                  />
                  <div class="flex-column mt-3 mt-xl-0 ml-4 mr-auto ml-lg-3">
                    <div class="list__details">
                      <h2 class="title_drinkCheck">{{ form.product_name }}</h2>
                      <ul class="list-unstyled">
                        <li>x1 (Large)</li>
                        <li>x1 (Regular)</li>
                      </ul>
                    </div>
                  </div>
                  <h2 class="mt-lg-2 mt-xl-2 checkOut__name ml-lg-auto">
                    Checkout
                  </h2>
                  <a href="#"
                    ><img
                      class="ml-lg-3 ml-xl-4 pb-lg-0 arrow__icons"
                      alt="icon_arrowCheckout"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navbar from '../components/_base/Navbar'
import Footer from '../components/_base/Footer'
import axios from 'axios'

export default {
  name: 'Product',

  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters({
      products: 'getProduct'
    }),
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      products: {},
      form: {
        category_id: '',
        product_name: '',
        product_image: '',
        product_price: '',
        product_size: '',
        product_list: '',
        product_stok: '',
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
    this.product_id = this.$route.params.id
    this.getproductByid(this.$route.params.id)
  },
  methods: {
    ...mapActions(['getProducts', 'patchProduct']),
    deleteProduct(product_id) {
      console.log(product_id)
    },
    getproductByid(product_id) {
      axios
        .get(`http://localhost:3000/product/${product_id}`)
        .then(response => {
          console.log(response)
          const {
            category_id,
            product_name,
            product_image,
            product_list,
            product_stok,
            product_price,
            product_size,
            product_status
          } = response.data.data[0]
          this.form = {
            category_id,
            product_name,
            product_image,
            product_list,
            product_stok,
            product_price,
            product_size,
            product_status
          }
          const data = {
            product_id: this.product_id,
            form: data
          }
          // this.patchProduct(data)
        })
        .catch(error => {
          console.log(error.response)
        })
    },

    setProduct() {
      const data = new FormData()
      data.append('category_id', this.form.category_id)
      data.append('product_name', this.form.product_name)
      data.append('product_image', this.form.product_image)
      data.append('product_list', this.form.product_list)
      data.append('product_stok', this.form.product_stok)
      data.append('product_price', this.form.product_price)
      data.append('product_size', this.form.product_size)
      data.append('product_status', this.form.product_status)
      // for (var pair of data.entries()) {
      //   console.log(pair[0] + ', ' + pair[1])
      // }
      let dataUpdate = { dataSet: this.form, id: this.product_id }
      // console.log(dataUpdate)
      this.patchProduct(dataUpdate)
        .then(() => {
          this.getProduct()
          // this.makeToast('Product Updated', 'Success', 'success')
        })
        .catch(() => {
          // this.makeToast('Failed update product', 'Error', 'danger')
        })
      this.$bvModal.hide('add-product-modal')
    },

    handlePageChange(numberPage) {
      console.log(numberPage)
      this.page = numberPage
      this.getProduct()
    },
    handleFile(event) {
      console.log(event.target.files[0])
      this.form.product_image = event.target.files[0]
    },
    handleSize(size) {
      console.log(size)
      this.form.product_size = size
    },
    handleStok(stock) {
      this.form.product_stok = stock
      console.log(stock)
    },
    handlegr() {
      // this.form.product_size
    },
    handleStatus(status) {
      this.form.product_status = status
      console.log(status)
    },
    chooseFiles() {
      document.getElementById('fileUpdate').click()
    },
    handleCategory(category) {
      console.log(category)
      this.form.category_id = category
    }
  }
}
</script>

<style scoped>
.image__fit {
  margin-top: 5%;
  margin-left: 20%;
}
.button-size {
  flex: 100ch;
  justify-content: center;
}
.container-choice-1 {
  margin-top: 5%;
}

.size {
  margin-right: 10%;
  margin-left: 7%;
  background: #ffba33;
  height: 70px;
  width: 70px;
  border-radius: 100%;
  text-shadow: 0;
  font-weight: bold;
}
.method-buttom-1 {
  margin: 2%;
  background: #f4f4f8;
  border: 10px;
  border-radius: 10px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #e4e4e4;
}
/* Navbar Section Style */

/* Style Poition, color dll navbar */
span.navbar__title {
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  top: 5px;
  color: black;
}

li.nav-item a.nav-link {
  font-family: 'Rubik', sans-serif;
  padding-left: 7px;
  font-size: 16px;
  color: #4f5665;
}
li.nav-item.active a.nav-link {
  color: #6a4029;
  font-weight: 700;
}
button.button__logoSearching {
  outline: none !important;
  border: none;
  background: none;
}

.searching__logo {
  width: 1.8em;
  object-fit: contain;
}
.chat__Logo {
  width: 1.7em;
  object-fit: contain;
  position: relative;
  z-index: -1;
  top: 3px;
}
span.supply__Product {
  background-color: #6a4029;
  color: white;
  width: 25px;
  border-radius: 25px;
  object-fit: contain;
  border: 1px solid;
  position: absolute;
  bottom: 19.5px;
  font-size: 10px;
  right: 19px;
  text-align: center;
  padding: 3px 4px 3.1px 4px;
}

.costumer__Logo {
  width: 2em;
  object-fit: contain;
}

/* Header Product Detail */

img.product__pictureDetail {
  width: 270px;
  object-fit: contain;
  margin-left: 75px;
}

a.breadcrumb__listItem {
  color: #4f5665;
  font-family: 'Rubik', sans-serif;
}

a.breadcrumb__listItem.active {
  color: #6a4029;
  font-weight: 700;
  font-family: 'Rubik', sans-serif;
}
section.delivery__content {
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 20px;
}
h2.tittle_delivTime {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 25px;
}

button.option__delivCatagory {
  height: 40px;
  font-family: 'Poppins', sans-serif;
  padding: 5px 10px;
  background: #f4f4f8;
  border: 1px solid rgba(186, 186, 186, 0.35);
  text-align: center;
  border: none;
  margin-right: 10px;
  outline: none !important;
  border-radius: 10px;
  color: #9f9f9f;
  font-size: 20px;
}
button.option__delivCatagory.active {
  color: #fff;
  background: #6a4029;
  font-weight: 700;
  box-shadow: 0px 6px 20px rgba(137, 85, 55, 0.4);
}

button.option__deliv {
  height: 40px;
  font-family: 'Poppins', sans-serif;
  padding: 5px 20px;
  background: #f4f4f8;
  border: 1px solid rgba(186, 186, 186, 0.35);
  text-align: center;
  border: none;
  margin-right: 10px;
  outline: none !important;
  border-radius: 10px;
  color: #9f9f9f;
  font-size: 20px;
}

button.option__deliv.active {
  color: #fff;
  box-shadow: 0px 6px 20px rgba(137, 85, 55, 0.4);
  background: #6a4029;
  font-weight: 700;
}

label.col-form-label {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
}
input.form-control {
  background: #f4f4f8;
  height: 50px !important;
  font-family: 'Poppins', sans-serif;
  border: 1px solid rgba(186, 186, 186, 0.35);
}

/* Hover Product Details */
a.breadcrumb__listItem:hover {
  text-decoration: none;
  color: #4f5665;
}
button.option__delivCatagory:hover {
  background: #fa8034;
  color: #fff;
}
button.option__delivCatagory.active:hover {
  color: #fff;
  background: #6a4029;
  font-weight: 700;
}

button.option__deliv:hover {
  background: #fa8034;
  color: #fff;
}
button.option__deliv.active:hover {
  color: #fff;
  background: #6a4029;
  font-weight: 700;
}

/* Media Query Header Product Details */

@media (max-width: 576px) {
  img.product__pictureDetail {
    width: 270px;
    object-fit: contain;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  button.option__delivCatagory {
    margin-top: 10px;
  }
}

/* Product Details Component */

h1.titleProduct__details {
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: 65px;
  text-align: center;
}
p.descProduct__details {
  font-family: 'Poppins', sans-serif;
  font-size: 23px;
}
p.descDelivery__product {
  font-family: 'Poppins', sans-serif;
  font-size: 23px;
  padding-right: 190px;
}
p.descDelivery__product strong {
  color: #6a4029;
}
.inputProduct__range {
  border: 1px solid rgb(189, 187, 187);
  height: 50px;
  border-radius: 5px;
}
button.minbtn {
  background: none;
  outline: none !important;
  width: 45px;
  border: none;
}
input.inputbtn {
  width: 50px;
  font-family: 'Poppins', sans-serif;
  outline: none !important;
  color: #6a4029;
  font-size: 23px;
  padding-top: 4px;
  height: 50px;
  font-weight: 700;
  border: 1px solid rgb(189, 187, 187);

  text-align: center;
}
button.plusbtn {
  background: none;
  border: none;
  outline: none !important;
  width: 45px;
}
h2.priceTag__Product {
  font-size: 33px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
}

button.btn__toCartnStaf {
  height: 70px;
  width: 100%;
  margin-left: 5%;
  outline: none !important;
  border-radius: 20px;
  font-size: 22px;
  border: none;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
}
button.btn__toCartnStaf:nth-child(1) {
  background-color: #6a4029;
  color: white;
}
button.btn__toCartnStaf:nth-child(2) {
  background: #ffba33;
  color: #6a4029;
}

div.catagory__sizeProduct {
  background: #ffffff;
  box-shadow: 0px 70px 50px rgba(57, 57, 57, 0.1);
  border-radius: 20px;
}

h2.title__chooseSize {
  font-size: 30px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}
div.choose_sizeDrink a {
  padding-right: 18px;
  display: inline-block;
  margin-left: 20px;
  margin-right: auto;
}
div.detail_checkoutProduct {
  z-index: 1;
  background: #ffffff;
  box-shadow: 0px 70px 50px rgba(57, 57, 57, 0.1);
  border-radius: 20px;
}

img.detail_imageProd {
  width: 120px;
  object-fit: contain;
}

h2.title_drinkCheck {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 23px;
}
div.list__details {
  position: relative;
  top: 15px;
}
ul.list-unstyled li {
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
}

h2.checkOut__name {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 25px;
}

img.arrow__icons {
  width: 60px;
  object-fit: contain;
}
/* Hover Detail Component */
button.btn__toCartnStaf:nth-child(1):hover {
  background-color: #8d3d12;
  color: white;
}
button.btn__toCartnStaf:nth-child(2):hover {
  background: #fda900;
  color: #6a4029;
}

/* Media Query Detail Component */
@media (max-width: 1024px) {
  p.descDelivery__product {
    padding-right: 50px;
  }
  div.choose_sizeDrink a {
    padding-right: 14px;
    margin-left: 7px;
  }
  img.detail_imageProd {
    width: 85px;
  }
  h2.checkOut__name {
    font-size: 20px;
  }
  h2.title_drinkCheck {
    font-size: 19px;
  }
  ul.list-unstyled li {
    font-size: 14px;
  }
  div.list__details {
    top: 5px;
  }
  img.arrow__icons {
    width: 50px;
  }
}
@media (max-width: 576px) {
  h1.titleProduct__details {
    font-size: 45px;
  }
  p.descProduct__details {
    font-size: 23px;
    text-align: justify;
  }
  p.descDelivery__product {
    padding-right: 0;
  }
  div.choose_sizeDrink a {
    padding-right: 20px;
    margin-left: 20px;
  }
  h2.priceTag__Product {
    font-size: 43px;
  }
  button.minbtn {
    width: 70px;
  }
  input.inputbtn {
    width: 70px;
  }
  button.plusbtn {
    width: 70px;
  }
  button.btn__toCartnStaf {
    margin-left: 0;
  }
  h2.checkOut__name {
    font-size: 35px;
    margin-top: 10px;
  }
  img.arrow__icons {
    width: 80px;
  }
  img.detail_imageProd {
    width: 150px;
  }
}
@media (max-width: 375px) {
  div.choose_sizeDrink a {
    padding-right: 10px;
    margin-left: 21px;
  }
}

@media (max-width: 360px) {
  div.choose_sizeDrink a {
    padding-right: 10px;
    margin-left: 16px;
  }
  p.descProduct__details {
    font-size: 25px;
  }
}

/* Footer Section Component */
div.footer__displayDetails {
  position: relative;
}
footer.section-footer {
  top: -110px;
  z-index: -1;
  width: 100%;
  height: 370px;
  position: absolute;
}
div.footer__details {
  position: relative;
  top: 120px;
}
span.title_logoFooter {
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
  font-family: 'Rubik', sans-serif;
}
p.desc__footer {
  font-size: 16px;
  font-family: 'Rubik', sans-serif;
  width: 330px;
}
.logo_media a img {
  padding-right: 10px;
}
p.bywhat {
  color: #afb5c0;
  font-size: 16px;
}
.title_productFooter {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 18px;
}
.list-unstyled li {
  padding-bottom: 10px;
}
.list-unstyled li a {
  color: #000;
  text-decoration: none;
}

/* Footer Hover Style */
.list-unstyled li a:hover {
  color: rgb(114, 108, 108);
  text-decoration: none;
}

/* Media Query Footer */
@media (max-width: 576px) {
  div.footer__displayDetails {
    position: static;
  }
  footer.section-footer {
    position: static;
  }
  div.footer__details {
    position: static;
  }
}
@media (max-width: 360px) {
  p.desc__footer {
    width: 300px;
  }
}
</style>
