<template>
  <div>
    <b-container fluid class="bg-user">
      <b-col class="txt-user-profile"> <p>ADD VOUCHER</p></b-col>
      <b-container class="card">
        <b-row>
          <b-col>
            <div class="colum-user-1 ">
              <div class="button-set-profile">
                <input
                  id="fileUploadVoucher"
                  type="file"
                  hidden
                  @change="handleFile"
                />
                <br />
                <label for="fname" class="contact-1">Voucher Diskon</label
                ><br />
                <b-dropdown
                  size="lg"
                  split
                  text="Discount"
                  class="m-2"
                  variant="outline-secondary"
                >
                  <b-dropdown-item-button @click="handleCategory(10)"
                    >10%</b-dropdown-item-button
                  >
                  <b-dropdown-item-button @click="handleStok(50)"
                    >50%</b-dropdown-item-button
                  >
                  <b-dropdown-item-button @click="handleStok(100)"
                    >100%</b-dropdown-item-button
                  >
                </b-dropdown>
                <br />
                <label for="fname" class="contact-1">Voucher Status :</label>
                <b-dropdown
                  size="lg"
                  split
                  text="Voucher Status"
                  class="m-2"
                  variant="outline-secondary"
                >
                  <b-dropdown-item-button @click="handleStatus(10)"
                    >1</b-dropdown-item-button
                  >
                  <b-dropdown-item-button @click="handleStatus(50)"
                    >2</b-dropdown-item-button
                  >
                </b-dropdown>
              </div>
            </div></b-col
          >
          <b-col>
            <b-container class="card-contact">
              <p></p>
              <form>
                <label for="fname" class="contact-1">Voucher Name :</label
                ><br />
                <input type="text" v-model="form.voucher_name" /><br />
                <label for="fname" class="contact-1">Description :</label><br />
                <input type="text" v-model="form.voucher_list" /><br />
                <br />
                <br />

                <button
                  type="button"
                  class="save-product"
                  @click="postVoucher()"
                >
                  Save Voucher
                </button>
              </form>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
      <br />
    </b-container>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  name: 'Product',

  components: {},
  computed: {
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      // product: [],
      form: {
        voucher_name: '',
        voucher_diskon: '',
        voucher_list: ''
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
    this.getVoucher()
  },
  methods: {
    ...mapActions(['postVoucher']),
    postVoucher() {
      console.log(this.form)
      const { voucher_name, voucher_diskon, voucher_list } = this.form
      const data = new FormData()
      data.append('voucher_name', voucher_name)
      data.append('voucher_diskon', voucher_diskon)
      data.append('voucher_list', voucher_list)
      // for (var pair of data.entries()) {
      //   console.log(pair[0] + ', ' + pair[1])
      // }
      axios
        .post('http://localhost:3000/voucher', data)
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
    deleteProduct(product_id) {
      console.log(product_id)
    },
    setProduct(data) {
      console.log(data)
      // console.log(this.product_id)
      // this.form = {
      //   category_id: 'data.category_id',
      //   product_name: 'data.product_name',
      //   product_price: 'data.product_price',
      //   product_size: 'data.product_size',
      //   product_list: 'product_list',
      //   product_status: 'product_status'
      // }
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
    handleFile(event) {
      console.log(event)
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
      document.getElementById('fileUpload').click()
    },
    handleCategory(category) {
      this.form.category = category
    }
  }
}
</script>

<style scoped>
.type-delivery {
  border-radius: 100%;
  margin-left: 2%;
  height: 70px;
  width: 100px;
  color: white;
}

.type {
  border-radius: 100%;
  margin-left: 2%;
  height: 60px;
  width: 60px;
  color: white;
}
.contact-1 {
  margin-top: 2%;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height */

  color: #6a4029;
}
.title-doyouwanna {
  margin-top: 7%;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height */

  color: #6a4029;
}
.txt-user-profile {
  color: white;
}
.bg-user {
  background: white;
}
.card {
  background: white;
  border-radius: 20px;
}
.card-contact {
  margin-top: 5%;
  background: white;
  margin-bottom: 5%;
}
.button-set-profile {
  margin-left: 8%;
}
.m-2,
.save-product,
.take-picture,
.remote-photo,
.set-password,
.save-user,
.cancel-user,
.logout {
  color: #ffffff;

  border-radius: 20px;
  width: 370px;
  height: 60px;
  text-align: center;
}
.save-product,
.set-photo,
.cancel-user {
  background: #ffba33;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
  /* identical to box height */

  text-align: center;

  color: #6a4029;
}
.remote-photo,
.save-user {
  background: #6a4029;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 22px;
}

.set-password,
.logout {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */

  color: #6a4029;
}
.take-picture,
.colum-user-1 {
  margin-right: 20%;
}

.take-picture {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height */

  background: #0b132a;
  border-radius: 20px;
}
.remote-photo,
.set-password,
.save-user,
.cancel-user,
.logout {
  margin-top: 5%;
}
.contact {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 37px;
  /* identical to box height */

  color: #4f5665;
}
</style>
