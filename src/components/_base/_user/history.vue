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

            <!-- Modal -->

            <div class="d-flex pr-xl-5 mr-xl-3 pr-1">
              <a
                href="#"
                data-toggle="modal"
                data-target="#staticBackdrop"
                class="select_all ml-xl-auto ml-auto mb-4 mb-xl-5"
                >Select All</a
              >
              <div
                class="modal fade"
                id="staticBackdrop"
                data-backdrop="static"
                data-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content mt-lg-5 mt-4 p-4 p-lg-4">
                    <div class="modal-body">
                      <h2 class="text-center">
                        Are you sure want to delete the selected items?
                      </h2>
                    </div>
                    <div class="modal-footer px-lg-5 mt-lg-4 mb-lg-2">
                      <button
                        type="button"
                        class="btn_cancel mr-auto"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="button" class="btn_delete">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="row px-xl-5 grid__system"
              v-for="(item, index) in orders"
              :key="index"
            >
              <div class="col">
                <div class="card p-xl-1 position-relative mb-3 mb-lg-4">
                  <div class="card-body d-flex align-items-center">
                    <div class="image__history">
                      <img class="fit__image" alt="Image_History" />
                    </div>
                    <div class="all__infoHistory position-relative">
                      <h2 class="title__product">{{ item.product_price }}</h2>
                      <div class="info__history">
                        <p class="mt-xl-3 mt-3">{{ item.product_price }}</p>
                        <p>Delivered</p>
                      </div>
                    </div>
                    <input
                      class="ml-xl-auto ml-auto mt-4 mt-xl-auto mr-xl-3 mb-xl-3"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
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
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'
import Footer from '../Footer'
import Navbar from '../Navbar'
// import { mapActions, mapGetters } from 'vuex'
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
        product_id: '',
        product_price: '',
        order_qty: '',
        order_price: '',
        order_total: ''
      }
    }
  },
  created() {
    this.gethistory()
    console.log(this.gethistory)
    this.getUserProfile(this.user.user_id)
    console.log(this.getUserProfile)
  },
  methods: {
    ...mapActions(['getUserProfile']),
    gethistory() {
      axios
        .get('http://localhost:3000/order/74')
        .then(response => {
          console.log(response)
          this.history = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    computed: {
      ...mapGetters({
        user: 'setUser',
        profile: 'setProfile'
      })
    }
  }
}
</script>

<style scoped>
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
</style>
