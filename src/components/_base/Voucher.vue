<template>
  <div class="voucher">
    <aside>
      <p class="aside-text">
        Cupon will be updated every weeks. <br />
        Check them out!
      </p>
      <div class="aside-card">
        <div class="card-item row">
          <div class="card-image col-3">
            <img src="assets/img/aside-icon.png" />
          </div>
          <div class="card-text col-9">
            <strong>HAPPY MOTHER'S DAY!</strong>
            <p>Get one of our favourite menu for free!</p>
          </div>
        </div>
      </div>
      <div class="aside-card" style="background-color: #f5c361">
        <div class="card-item row">
          <div class="card-image col-3">
            <img src="assets/img/aside-icon2.png" />
          </div>
          <div class="card-text col-9">
            <strong>HAPPY MOTHER'S DAY!</strong>
            <p>Get one of our favourite menu for free!</p>
          </div>
        </div>
      </div>
      <div class="aside-card">
        <div class="card-item row">
          <div class="card-image col-3">
            <img src="../../assets/voucher/voucher1.png" />
          </div>
          <div class="card-text col-9">
            <strong>HAPPY MOTHER'S DAY!</strong>
            <p>Get one of our favourite menu for free!</p>
          </div>
        </div>
      </div>
      <div class="aside-card" style="background-color: #c49378">
        <div class="card-item row">
          <div class="card-image col-3">
            <img src="assets/img/aside-icon3.png" />
          </div>
          <div class="card-text col-9">
            <strong>HAPPY MOTHER'S DAY!</strong>
            <p>Get one of our favourite menu for free!</p>
          </div>
        </div>
      </div>
      <div class="aside-btn">Apply Coupon</div>
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
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'voucher',

  computed: {
    // rows() {
    //   return this.totalRows
    // },
    ...mapGetters({
      voucher: 'getDataVoucher'
    })
  },
  data() {
    return {
      // product: [],
      form: {
        voucher_id: '',
        voucher_name: '',
        voucher_diskon: '',
        voucher_list: '',
        voucher_status: ''
      },
      alert: false,
      isMsg: '',
      product_id: ''
    }
  },
  created() {
    this.getVoucher()
  },
  methods: {
    ...mapActions(['getVoucher']),
    postVoucher() {
      const {
        voucher_name,
        voucher_diskon,
        voucher_list,
        voucher_status
      } = this.form
      console.log(this.form)
      const data = new FormData()
      data.append('voucher_name', voucher_name)
      data.append('voucher_diskon', voucher_diskon)
      data.append('voucher-list', voucher_list)
      data.append('voucher_status', voucher_status)
      // untuk pengecekan saja
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
      // axios
      //   .post('http://localhost:3000/product', data)
      //   .then(response => {
      //     console.log(response)
      //     this.alert = true
      //     this.isMsg = response.data.msg
      //     // this.getProduct()
      //   })
      //   .catch(error => {
      //     console.log(error.response)
      //   })
    },
    //  pr
    deleteVoucher(item) {
      axios
        .delete(`http://localhost:3000/voucher/${item.voucher_id}`)
        .then(response => {
          console.log(response)
          this.alert = true
          this.isMsg = response.data.msg
          this.getVoucher()
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    setProduct(data) {
      console.log(data)

      this.form = data
      this.voucher_id = data.voucher_id
    },
    pacthProduct() {
      console.log(this.form)
    },
    handlePageChange(numberPage) {
      console.log(numberPage)
      this.page = numberPage
      this.getProduct()
    },
    productAbout(voucher_id) {
      this.$router.push({ name: 'aboutProduct', params: { id: voucher_id } })
    }
  }
}
</script>

<style>
.body {
  font-family: Arial;
}

.coupon {
  border: 5px dotted #bbb;
  width: 80%;
  border-radius: 15px;
  margin: 0 auto;
  max-width: 600px;
}

.containerr {
  padding: 2px 16px;
  background-color: #f1f1f1;
}

.promo {
  background: #ccc;
  padding: 3px;
}

.expire {
  color: red;
}
.centered {
  text-align: center;
  border-radius: 100px;
}
.card-voucher {
  margin-bottom: 5%;
}
.add-voucher {
  margin-top: 40%;
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
  /* identical to box height, or 120% */

  text-align: center;

  color: #6a4029;
}
.terms-voucher {
  margin-top: 20%;
  margin-bottom: 20%;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;

  color: #4f5665;
}
</style>
