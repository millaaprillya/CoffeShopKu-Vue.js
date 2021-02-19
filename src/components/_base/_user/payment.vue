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
                      <div class="d-flex mb-xl-3 mb-3 align-items-center">
                        <img alt="paymentItems" />
                        <div class="flex-xl-column ml-2 ml-lg-3 ml-xl-4">
                          <p class="name_product">Hazelnut Latte</p>
                          <p class="name_product">x 1</p>
                          <p class="name_product">Regular</p>
                        </div>
                        <h5 class="priceTag pr-xl-2 pr-2 ml-auto ml-xl-auto">
                          IDR 24.0
                        </h5>
                      </div>
                    </div>
                    <hr class="mt-xl-4 mt-4" />
                    <div class="d-flex mt-xl-4 mt-4 sub_price">
                      <h5>SUBTOTAL</h5>
                      <p class="ml-auto ml-xl-auto">IDR 120.000</p>
                    </div>
                    <div class="d-flex sub_price">
                      <h5>TAX & FEES</h5>
                      <p class="ml-auto ml-xl-auto">IDR 20.000</p>
                    </div>
                    <div class="d-flex sub_price mb-xl-5">
                      <h5>SHIPPING</h5>
                      <p class="ml-auto ml-xl-auto">IDR 10.000</p>
                    </div>
                    <div
                      class="d-flex mt-xl-4 mt-lg-4 mt-3 pb-3 pb-lg-5 pb-xl-5 total_productPrice"
                    >
                      <h2 class="title_card">Total</h2>
                      <h2 class="title_card ml-auto ml-xl-auto">IDR 150.000</h2>
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
                    <h5><strong>Delivery</strong> to Iskandar Street</h5>
                    <hr />
                    <h5 class="pr-xl-3">
                      Km 5 refinery road oppsite re public road, effurun,
                      Jakarta
                    </h5>
                    <hr />
                    <h5 class="pr-xl-3">+62 81348287878</h5>
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
  name: 'login',
  components: {
    Footer,
    Navbar
  },
  data() {
    return {
      register: []
    }
  },
  created() {
    this.getHistory(this.user.user_id)
  },
  methods: {
    ...mapActions([
      'getHistory',
      'getUserProfile',
      'logout',
      'patchUserProfile',
      'changePassword',
      'patchProfilePict',
      'deleteProfilePict'
    ]),
    ...mapMutations(['patchUser']),
    updateProfile() {
      console.log(this.form)
      const setData = { id: this.user.userId, data: this.profile }
      this.patchUserProfile(setData)
        .then(result => {
          this.$toasted.success(result)
        })
        .catch(error => {
          this.$toasted.error(error)
        })
    },
    mybooking() {
      this.$router.push({
        name: 'MyBooking'
      })
    },
    patchPasword() {
      const setData = { id: this.user.userId, ...this.form }
      this.changePassword(setData)
        .then(result => {
          this.$toasted.success(result)
        })
        .catch(error => {
          this.$toasted.error(error)
        })
    },
    handleFile(event) {
      if (event.target.files[0].size > 2000000) {
        this.makeToast('Failed', `File too large`, 'danger')
      } else {
        console.log('file oke')
        this.profile.profileImage = event.target.files[0]
        const img = this.profile.profileImage
        this.url = URL.createObjectURL(img)
        const { profileImage } = this.profile
        const data = new FormData()
        data.append('profileImage', profileImage)
        this.patchProfilePict(data)
          .then(result => {
            this.makeToast(
              `Profile Image Updated`,
              'Success update profile image',
              'success'
            )
            this.getUserProfile(this.user.userId)
            console.log(result)
            console.log('berhasil patching')
          })
          .catch(error => {
            this.makeToast('Failed', `Update Image Fail`, 'danger')
            console.log(error)
            console.log('error patching')
          })
      }
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
