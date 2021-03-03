<template>
  <div>
    <Navbar />
    <div class="bg-history">
      <main class="bg__history">
        <hr class="mt-lg-3 d-none d-lg-block" />
        <div class="container-fluid">
          <div class="pb-xl-5 pb-3">
            <div class="titleHistory mt-xl-5 mt-lg-5 pt-4 pt-xl-0">
              <h1>Let’s see what you have bought!</h1>
              <p>Select item to delete</p>
            </div>
            <div class="row">
              <div
                class="col-sm-6"
                v-for="(items, index) in history"
                :key="index"
              >
                <div class="card">
                  <div class="card-body">
                    <div class="row">
                      <div class="col">
                        <h5 class="card-title">
                          History id : {{ items.history_id }}
                        </h5>
                        <p class="card-text">
                          Subtotal : {{ items.history_subtotal }}
                        </p>
                        <div>
                          <b-button
                            v-b-modal.modal-scrollable
                            class="btn btn-warning"
                            v-b-modal="modalId(index)"
                            >See details orders</b-button
                          >

                          <b-modal
                            scrollable
                            title="Order Detail"
                            hide-footer
                            :id="'modal' + index"
                          >
                            <div>
                              <center>
                                <div
                                  class="aside-card"
                                  v-for="(item, i) in items.orders"
                                  :key="i"
                                >
                                  <div class="card-item row">
                                    <div class="card-image col-3">
                                      <img
                                        src="'http://localhost:3000/' + item.product_image"
                                        alt=""
                                        class="rounded-circle"
                                      />
                                      <!-- {{ item.product_image }} -->
                                    </div>
                                    <div class="card-text col-5">
                                      <strong>{{ item.product_name }}</strong>
                                      <p>
                                        Price :
                                        {{ item.product_price }}
                                      </p>
                                      <h6>Qty : {{ item.order_qty }} x</h6>
                                    </div>
                                    <div class="card-text col-1">
                                      <label>Total </label>
                                      <strong
                                        >{{
                                          item.order_qty * item.product_price
                                        }}
                                      </strong>
                                    </div>
                                  </div>
                                </div>
                              </center>
                              <!-- <p class="my-4">
                                {{ item.product_name }}
                              </p>
                              <p>
                                {{ item.product_price }}
                              </p>
                              <p>
                                {{ item.order_qty }}
                              </p>
                              <p>
                                {{ item.order_total }}
                              </p> -->
                            </div>
                          </b-modal>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Footer from '../Footer'
import Navbar from '../Navbar'
export default {
  name: 'History',
  components: {
    Footer,
    Navbar
  },
  data() {
    return {
      orders: [],
      form: {
        order_id: '',
        history_id: '',
        product_name: '',
        product_id: '',
        product_price: '',
        order_qty: '',
        order_price: '',
        order_total: ''
      }
    }
  },
  created() {
    this.getHistoryPayment(this.user.user_id)
    this.getUserProfile(this.user.user_id)
  },
  methods: {
    ...mapActions(['getUserProfile', 'getHistoryPayment']),
    modalId(index) {
      return 'modal' + index
    }
  },
  computed: {
    ...mapGetters({
      user: 'setUser',
      history: 'getHistory'
    })
  }
}
</script>

<style scoped>
.aside-card {
  background-color: white;
  border-radius: 20px;
  width: 335px;
  height: 109px;
  padding: 10px;
  margin-top: 20px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
}
.grid__system {
  width: 500px;
  height: 70px;
  margin-bottom: 150px;
}
.titleHistory {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;
  text-align: center;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
}
.img-round {
  width: 115px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
}
.shadow-card {
  -webkit-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
}
.centered {
  display: flex;
  align-items: center;
}
.shadow-text {
  text-shadow: 3px 3px 3px #313131;
}
.bg-history {
  background-image: url('../../../assets/bg/bg-history.png');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.rubik {
  font-family: 'Rubik', sans-serif;
}
/* .card-style {
  height: 100px;
  width: 100px;
  border: none;
  border-radius: 15px;
  margin-bottom: 30px;
  cursor: pointer;
  border-bottom: 3px solid #d46804;
} */
.img {
  width: auto;
  border-radius: 50%;
}
.card {
  border-radius: 20px;
  margin-left: 200px;
  margin-top: 5%;
  margin-bottom: 5%;
  width: 50%;
}
.card-item {
  height: 100%;
}
</style>
