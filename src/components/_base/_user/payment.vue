<template>
  <div>
    <Navbar />
    <div class="bg-payment">
      <!-- Main Section -->
      <main class="bg__payment">
        <hr class="mt-lg-3 d-none d-lg-block" />
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-6">
              <div class="order__listProduct mt-4 mt-lg-5 mt-xl-5">
                <h1 class="title__orderList">Checkout your item now!</h1>
                <div class="card px-xl-2 px-lg-2 pb-lg-4 pb-xl-4 mt-3 mt-xl-5">
                  <h2
                    class="title_card pt-4 pb-3 p-lg-4 mt-lg-4 p-xl-5 mt-xl-4 text-center"
                  >
                    Order Summary
                  </h2>
                  <div class="card-body px-lg-2 px-xl-4">
                    <div class="card__all">
                      <!-- //proser looping -->
                      <div
                        class="d-flex mb-xl-3 mb-3 align-items-center"
                        v-for="(item, index) in orders"
                        :key="index"
                      >
                        <img
                          :src="'http://localhost:3000/' + item.product_image"
                          class="rounded-circle"
                          width="100"
                          height="100"
                        />
                        <div class="flex-xl-column ml-2 ml-lg-3 ml-xl-4">
                          <p class="name_product">{{ item.product_name }}</p>
                          <p class="name_qty">{{ item.order_qty }} x</p>
                          <p class="name_product">Regular</p>
                        </div>
                        <h5 class="priceTag pr-xl-2 pr-2 ml-auto ml-xl-auto">
                          Rp. {{ item.product_price * item.order_qty }}
                        </h5>
                      </div>
                    </div>
                    <hr class="mt-xl-4 mt-4" />
                    <div class="d-flex mt-xl-4 mt-4 sub_price">
                      <h5>SUBTOTAL</h5>
                      <p class="ml-auto ml-xl-auto">{{ subtotal }}</p>
                    </div>
                    <div class="d-flex sub_price">
                      <h5>TAX & FEES</h5>
                      <p class="ml-auto ml-xl-auto">{{ tax }}</p>
                    </div>

                    <div
                      class="d-flex mt-xl-4 mt-lg-4 mt-3 pb-3 pb-lg-5 pb-xl-5 total_productPrice"
                    >
                      <h2 class="title_card">Total</h2>
                      <h2 class="title_card ml-auto ml-xl-auto">
                        {{ total }}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6">
              <div class="address__section p-lg-2 p-xl-5">
                <div class="d-flex align-items-lg-center align-items-center">
                  <h2 class="title__orderList2 mb-xl-2 mb-2 ml-2 ml-xl-2">
                    Address details
                  </h2>
                  <a
                    class="edit__btn ml-xl-auto ml-auto mb-2 mb-xl-2 mr-2 mr-xl-3"
                    >edit</a
                  >
                </div>
                <div class="card address_card px-2 px-xl-3 pt-2 pt-xl-3">
                  <div class="card-body">
                    <h5><strong>To </strong> {{ profile.user_name }}</h5>
                    <h5>
                      <strong>Delivery</strong> {{ profile.user_address }}
                    </h5>
                    <hr />
                    <h5 class="pr-xl-3">
                      {{ profile.user_address }}
                    </h5>
                    <hr />
                    <h5 class="pr-xl-3">(62 +) {{ profile.user_phone }}</h5>
                  </div>
                </div>
                <h2
                  class="title__orderList2 mt-4 mt-xl-5 mt-lg-2 mb-lg-2 mb-4 mb-xl-4 ml-2 ml-xl-2"
                >
                  Payment method
                </h2>
                <div class="card paymentOption__card px-3 px-xl-3 py-2 py-xl-2">
                  <div class="card-body">
                    <div class="d-flex align-items-center card__atm">
                      <input
                        type="radio"
                        name="Payment_Method"
                        id="Payment_Method1"
                        value="option1"
                        @click="paymentMehods('Card')"
                      />
                      <img
                        class="ml-xl-3 ml-3"
                        alt="card__credit"
                        src="../../../assets/Socmed/Icon_BankAcc.svg"
                      />
                      <a class="pr-xl-3 ml-xl-3 ml-3">Card</a>
                    </div>
                    <hr class="ml-xl-4 ml-4" />
                    <div class="d-flex align-items-center card__atm">
                      <input
                        type="radio"
                        name="Payment_Method"
                        id="Payment_Method2"
                        value="option2"
                        checked
                        @click="paymentMehods('Bank')"
                      />
                      <img
                        class="ml-xl-3 ml-3"
                        alt="card__Bank"
                        src="../../../assets/Socmed/Icon_BankAcc (1).svg"
                      />
                      <a class="pr-xl-3 ml-xl-3 ml-3">Bank account</a>
                    </div>
                    <hr class="ml-xl-4 ml-4" />
                    <div class="d-flex align-items-center card__atm">
                      <input
                        type="radio"
                        name="Payment_Method"
                        id="Payment_Method3"
                        value="option3"
                        @click="paymentMehods('cash')"
                      />
                      <img
                        class="ml-xl-3 ml-3"
                        alt="card__COD"
                        src="../../../assets/Socmed/icons_COD.svg"
                      />
                      <a class="pr-xl-3 ml-xl-3 ml-3">Cash on delivery</a>
                    </div>
                  </div>
                </div>
                <button
                  class="buttom-confirm mt-xl-5 mt-4 mb-5 mb-xl-0 w-100 btn_confirm"
                  @click="postOrder()"
                >
                  Confirm and Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <br />
      <br />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Navbar from '../Navbar'
import Footer from '../Footer'
export default {
  name: 'payment',
  components: {
    Footer,
    Navbar
  },
  data() {
    return {
      payment: '',
      total: 0,
      tax: 0,
      subtotal: 0
    }
  },
  created() {
    this.getHistory()
    this.getUserProfile(this.user.user_id)
    this.paymentSumary()
    this.getHistoryPayment()
    console.log(this.getHistoryPayment)
  },
  methods: {
    ...mapActions([
      'getHistory',
      'getUserProfile',
      'ChekoutProduct',
      'getHistoryPayment'
    ]),
    ...mapMutations(['setPayment', 'resetOrder']),
    paymentMehods(value) {
      this.payment = value
    },
    paymentSumary() {
      for (let i = 0; i < this.orders.length; i++) {
        this.subtotal += this.orders[i].order_qty * this.orders[i].product_price
      }
      this.tax = this.subtotal * 0.1
      this.total = this.subtotal + this.tax
    },
    postOrder() {
      const setData = { userId: this.user.user_id, orders: this.orders }
      console.log(setData)

      this.ChekoutProduct(setData)
        .then(result => {
          alert(result)
          this.resetOrder()
          this.tax = 0
          this.total = 0
          this.subtotal = 0
        })
        .catch(error => {
          alert(error)
        })
    },
    totalPayment() {
      for (let i = 0; i < this.orders.length; i++) {
        this.subtotal +=
          this.orders[i].product_qty * this.orders[i].product_price
      }
      this.tax = this.subtotal * 0.1
      this.total = this.subtotal + this.tax
      console.log(this.subtotal)
    }
  },
  computed: {
    ...mapGetters({
      orders: 'getOrders',
      profile: 'setProfile',
      user: 'setUser'
    })
  }
}
</script>

<style>
.name_product {
  font-weight: bold;
}
.title_card {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 52px;
  /* identical to box height */

  color: #362115;
}
.title__orderList2 {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 47px;

  color: #ffffff;
}
.title__orderList {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;

  color: #ffffff;
}
.pr-xl-3 {
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;

  color: #000000;
}
.bg-payment {
  background-image: url('../../../assets/bg/bg-payment.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
}
.box-order-sumary {
  margin-top: 6%;
  margin-left: 20%;
  margin-bottom: 20%;
  background-color: white;
  width: 487px;
  height: 730px;
  left: 153px;
  top: 332px;
  border-radius: 20px;
}
.title-order-p {
  position: absolute;
  height: 20px;
  left: 251px;
  margin-top: 5%;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 52px;
  color: #362115;
}
.buttom-confirm {
  width: 452px;
  height: 84px;
  background: #6a4029;
  box-shadow: 0px 10px 20px rgba(137, 85, 55, 0.4);
  border-radius: 20px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;

  color: #ffffff;
}
</style>
