<template>
  <div>
    <Navbar />
    <main class="bgAccount">
      <div class="container ">
        <h2 class="title ml-lg-1 mt-lg-4 mb-3 mb-lg-4">User Profile</h2>
        <form @submit.prevent="updateProfile">
          <div class="card__account p-lg-5 pt-4">
            <div class="row">
              <div class="col-xl-4">
                <div class="image__fit">
                  <img
                    src="../../assets/nav/image 39.png"
                    alt="image__account"
                    class="style__image"
                  />
                </div>
                <div class="label__name mt-3 mt-lg-2">
                  <h2>{{ profile.user_name }}</h2>
                  <p>{{ profile.user_email }}</p>
                </div>
                <div class="all_button">
                  <button class="col btn_photo mb-lg-3 mb-3">
                    Choose photo
                  </button>
                  <button class="col btn_removePhoto mb-lg-5 mb-5">
                    Remove photo
                  </button>
                  <button
                    @click="$bvModal.show('bv-modal-example')"
                    class="button btn_editPassword mb-lg-5 mb-4"
                  >
                    Change Password
                  </button>
                  <b-modal id="bv-modal-example" hide-footer>
                    <template #modal-title>Change Password</template>
                    <div class="d-block">
                      <h6>Password baru</h6>
                      <b-form-input
                        type="password"
                        v-model="form2.newPassword"
                        placeholder="Insert new password "
                        required
                      ></b-form-input>
                      <br />
                      <h6>Konfirmasi password baru</h6>
                      <b-form-input
                        type="password"
                        v-model="form2.confirmPassword"
                        placeholder="confirm password "
                        required
                      ></b-form-input>
                    </div>
                    <b-button
                      class="mt-3"
                      variant="outline-primary"
                      block
                      @click="changePass()"
                      >Ubah password</b-button
                    >
                    <b-button
                      class="mt-3"
                      block
                      @click="$bvModal.hide('bv-modal-example')"
                      >Batal</b-button
                    >
                  </b-modal>

                  <div class="save_itbtn d-none d-lg-block">
                    <h2 class="sure__change mb-lg-5 px-lg-5 text-center">
                      Do you want to save the change?
                    </h2>
                    <button type="submit" class="col btn_saveChange mb-lg-3">
                      Save Change
                    </button>
                    <button class="col btn_cancel mb-lg-5">Cancel</button>
                    <button class="col btn_logout">Log out</button>
                  </div>
                </div>
              </div>
              <div class="col-xl-8">
                <div
                  class="card__editAccount mt-lg-2 py-4 py-lg-3 px-3 px-lg-5"
                >
                  <div class="d-flex position-relative mt-lg-2">
                    <h2 class="contact__title">Contacts</h2>
                    <a class="btn_edit" href="#"></a>
                  </div>

                  <div class="form-row mt-lg-3 mt-4">
                    <div class="form-group col-lg-6">
                      <label for="email">Email adress :</label>
                      <input
                        type="email"
                        class="form-control"
                        required
                        id="email"
                        v-model="profile.user_email"
                      />
                    </div>
                    <div class="form-group col-lg-6 mt-2 mt-lg-0">
                      <label class="mobile_date_form" for="Mobile Number"
                        >Mobile Number :</label
                      >
                      <input
                        type="tel"
                        class="form-control mobile_date_input"
                        id="mobile_number"
                        required
                        pattern="(+62)[0-9]{1}[0-9]{4}[0-9]{4}[0-9]{2}"
                        v-model="profile.user_phone"
                      />
                    </div>
                    <div class="form-group col-lg-6 mt-lg-4 mt-2">
                      <label for="address">Delivery adress :</label>
                      <textarea
                        class="form-control"
                        name="delivery"
                        required
                        cols="30"
                        id="delivery_address"
                        rows="2"
                        v-model="profile.user_address"
                      ></textarea>
                    </div>
                  </div>
                  <h2 class="title_detail my-lg-4 my-3 pb-1 pb-lg-2">
                    Details
                  </h2>
                  <div class="form-row">
                    <div class="form-group col-lg-6">
                      <label for="name">Display name :</label>
                      <input
                        type="text"
                        class="form-control"
                        required
                        id="email"
                        v-model="profile.user_name"
                      />
                    </div>
                    <div class="form-group col-lg-6 mt-2 mt-lg-0">
                      <label class="mobile_date_form" for="date"
                        >DD/MM/YY</label
                      >
                      <input
                        type="datetime"
                        placeholder="dd-mm-yyyy"
                        class="form-control mobile_date_input"
                        id="mobile_number"
                        required
                        v-model="profile.user_birth"
                      />
                    </div>
                    <div class="form-group col-lg-12 mt-2 mt-lg-2">
                      <label for="name">First name :</label>
                      <input
                        type="text"
                        required
                        class="form-control name_space"
                        id="firstName"
                        v-model="profile.user_name"
                      />
                    </div>
                    <div class="form-group col-lg-12 mt-lg-2">
                      <label for="name">Last name :</label>
                      <input
                        type="text"
                        required
                        class="form-control name_space"
                        id="lastName"
                        v-model="profile.user_lastname"
                      />
                    </div>
                    <div
                      class="radio_btn mt-lg-3 mt-4 ml-auto mr-auto pb-4 ml-lg-auto mr-lg-auto pb-lg-4"
                    >
                      <!-- <div class="form-check form-check-inline mr-2 mr-lg-5">
                        <input
                          class="form-check-input"
                          type="radio"
                          required
                          name="inlineRadioOptions"
                          id="inlineRadio1"
                          value="option1"
                          v-model="profile.user_gender"
                        />
                        <label
                          class="form-check-label pl-2 pl-lg-3"
                          for="inlineRadio1"
                          >Male</label
                        >
                      </div>
                      <div class="form-check form-check-inline ml-2 ml-lg-5">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="inlineRadio2"
                          value="option2"
                          checked
                        />
                        <label
                          class="form-check-label pl-2 pl-lg-3 active"
                          for="inlineRadio2"
                          >Female</label
                        >
                      </div> -->
                    </div>
                  </div>
                  <div class="save_itbtn d-block d-lg-none">
                    <h2 class="sure__change mb-4 px-4 text-center">
                      Do you want to save the change?
                    </h2>
                    <button
                      class="col btn_saveChange mb-3"
                      @click="updateProfile()"
                    >
                      Save Change
                    </button>
                    <button class="col btn_cancel mb-5" @click="cancel()">
                      Cancel
                    </button>
                    <button class="col btn_logout">Log out</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <br />
      <br />
    </main>
    <Footer />
  </div>
</template>

<script>
import alert from '../../mixins/alert'
import { mapActions, mapMutations, mapGetters } from 'vuex'
import Footer from '../../components/_base/Footer'
import Navbar from '../../components/_base/Navbar'

export default {
  name: 'login',
  mixins: [alert],
  components: {
    Footer,
    Navbar
  },
  data() {
    return {
      profile: '',
      register: [],
      form2: {
        newPassword: '',
        confirmPassword: ''
      },
      form: {
        user_img: '',
        user_email: '',
        user_phone: '',
        user_address: '',
        user_name: '',
        user_birth: '',
        user_lastname: '',
        user_gender: ''
      }
    }
  },
  created() {
    this.getUserProfile(this.user.user_id)
  },
  methods: {
    ...mapActions([
      'getUserProfile',
      'logout',
      'patchUserProfile',
      'changePassword',
      'patchProfilePict',
      'deleteProfilePict'
    ]),
    ...mapMutations(['patchUser', 'setUserProfile']),
    updateProfile() {
      const data = new FormData()
      data.append('user_img', this.profile.user_img)
      data.append('user_email', this.profile.user_email)
      data.append('user_phone', this.profile.user_phone)
      data.append('user_address', this.profile.user_address)
      data.append('user_name', this.profile.user_name)
      data.append('user_birth', this.profile.user_birth)
      data.append('user_lastname', this.profile.user_lastname)
      data.append('user_gender', this.profile.user_gender)
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1])
      }
      const setData = { id: this.user.user_id, dataUser: this.data }
      console
        .log(setData)
        // this.patchUserProfile(setData)
        .then(result => {
          this.$toasted.success(result)
          this.getUserProfile(this.user.user_id)
        })
        .catch(error => {
          this.$toasted.error(error)
        })
    },
    patchPasword() {
      console
        .log(this.form2)
        // const setData = { id: this.user.userId, ...this.form2 }
        // this.changePassword(setData)
        .then(result => {
          this.$toasted.success(result)
        })
        .catch(error => {
          this.$toasted.error(error)
        })
    },
    cancel() {
      this.$router.push({
        name: '/'
      })
    }
  },
  changePass() {
    this.changePasswords(this.form)
      .then(result => {
        this.successAlert(result.data.msg)
      })
      .catch(err => {
        this.errorAlert(err.data.msg)
      })
  },
  computed: {
    ...mapGetters({
      user: 'setUser',
      profile: 'setProfile'
    })
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

/* Main Style */
main.bgAccount {
  background-image: url('../../assets/bg/bg-user-edit.png');
  background-size: cover;
  background-position: 0% 35%;
}

/* Media Query Main Background */
@media (max-width: 1024px) {
  main.bgAccount {
    background-position: 60% 70%;
  }
}
@media (max-width: 576px) {
  main.bgAccount {
    background-position: 0% 40%;
  }
}

/* Left Account Style */

div.card__account {
  background: #f8f8f8;
  border-radius: 20px;
}

h2.title {
  text-shadow: 0px 6px 8px rgba(255, 255, 255, 0.26);
  color: #ffffff;
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 35px;
}

div.image__fit {
  width: 170px;
  margin: 0 auto;
  height: 170px;
  overflow: hidden;
  border-radius: 50%;
}

img.style__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 45%;
}
div.label__name {
  margin: 5%;
  text-align: center;
  font-family: 'Rubik', sans-serif;
}
div.label__name h2 {
  margin: 2%;
  font-size: 20px;
  font-weight: 700;
}
div.label__name p {
  font-size: 15px;
  line-height: 8px;
}

button.btn_photo,
button.btn_removePhoto,
button.btn_editPassword,
button.btn_saveChange,
button.btn_cancel,
button.btn_logout {
  width: 70%;
  font-size: 15px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  margin: 0 auto;
  display: block;
  border: none;
  outline: none !important;
  padding: 10px;
  border-radius: 10px;
}
button.btn_editPassword,
button.btn_saveChange,
button.btn_cancel,
button.btn_logout {
  font-size: 18px;
  border-radius: 20px;
  padding: 15px;
}
.all_button button:nth-child(1),
.all_button .save_itbtn button:nth-child(3) {
  color: #6a4029;
  background: #ffba33;
}
.all_button button:nth-child(2),
.all_button .save_itbtn button:nth-child(2) {
  color: #f8f8f8;
  background: #6a4029;
}
.all_button .save_itbtn button:nth-child(2) {
  filter: drop-shadow(0px 6px 20px rgba(106, 64, 41, 0.65));
}
.all_button button:nth-child(3),
.all_button .save_itbtn button:nth-child(4) {
  color: #6a4029;
  border: 1px solid rgb(187, 186, 186);
  background: #fff;
}

h2.sure__change {
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
}

/* Hover Left Account Style */
.all_button button:nth-child(1):hover,
.all_button .save_itbtn button:nth-child(3):hover {
  color: #703718;
  background: #ffaa00;
}
.all_button button:nth-child(2):hover,
.all_button .save_itbtn button:nth-child(2):hover {
  color: #ffffff;
  background: #633015;
}
.all_button button:nth-child(3):hover,
.all_button .save_itbtn button:nth-child(4):hover {
  color: #83360c;
  border: 1px solid rgb(126, 124, 124);
  background: #fff;
}

/* Media Query Left Account Style */
@media (max-width: 1024px) {
  h2.title {
    text-align: center;
    font-size: 50px;
  }
  div.label__name h2 {
    font-size: 25px;
  }
  div.label__name p {
    font-size: 20px;
    line-height: 13px;
  }
  button.btn_photo,
  button.btn_removePhoto,
  button.btn_editPassword,
  button.btn_saveChange,
  button.btn_cancel,
  button.btn_logout {
    font-size: 17px;
    width: 50%;
    padding: 15px;
  }
  button.btn_editPassword,
  button.btn_saveChange,
  button.btn_cancel,
  button.btn_logout {
    font-size: 20px;
    padding: 18px;
  }
  button.btn_logout {
    margin-bottom: 30px;
  }
}
@media (max-width: 576px) {
  h2.title {
    font-size: 35px;
  }
  button.btn_photo,
  button.btn_removePhoto,
  button.btn_editPassword,
  button.btn_saveChange,
  button.btn_cancel,
  button.btn_logout {
    width: 80%;
  }

  button.btn_saveChange,
  button.btn_cancel,
  button.btn_logout {
    width: 100%;
  }
  button.btn_logout {
    margin-bottom: 0;
  }
  .save_itbtn button:nth-child(3) {
    color: #6a4029;
    background: #ffba33;
  }
  .save_itbtn button:nth-child(2) {
    color: #f8f8f8;
    background: #6a4029;
    filter: drop-shadow(0px 6px 20px rgba(106, 64, 41, 0.65));
  }
  .save_itbtn button:nth-child(4) {
    color: #6a4029;
    border: 1px solid rgb(187, 186, 186);
    background: #fff;
  }

  /* Hover Media Query */
  .save_itbtn button:nth-child(3):hover {
    color: #703718;
    background: #ffaa00;
  }
  .save_itbtn button:nth-child(2):hover {
    color: #ffffff;
    background: #633015;
  }
  .save_itbtn button:nth-child(4):hover {
    color: #83360c;
    border: 1px solid rgb(126, 124, 124);
    background: #fff;
  }
}

/* Right Account Style */
div.card__editAccount {
  background: #ffffff;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
  border-radius: 10px;
  border-bottom: 10px solid #6a4029;
}

h2.contact__title {
  color: #4f5665;
  font-size: 25px;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

a.btn_edit {
  position: absolute;
  right: -30px;
  top: -12px;
}

.form-group input {
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  border: none;
  padding: 0;
  border-bottom: 1px solid;
}

.form-group label.mobile_date_form,
input.mobile_date_input {
  width: 70%;
  margin-left: 22%;
}
.form-group label {
  font-family: 'Poppins', sans-serif;
  font-size: 20px;
}

div.form-group textarea {
  resize: none;
  border: none;
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
  padding: 0;
  border-bottom: 1px solid;
  outline: none !important;
}

input.name_space {
  width: 50%;
}

h2.title_detail {
  font-size: 25px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: #4f5665;
}

div.radio_btn {
  font-family: 'Rubik', sans-serif;
  font-size: 20px;
}
div.radio_btn label.form-check-label {
  color: #9f9f9f;
}
div.radio_btn label.form-check-label.active {
  font-weight: 700;
  color: #6a4029;
}
@media (max-width: 576px) {
  a.btn_edit {
    position: absolute;
    right: -7px;
    top: -10px;
  }
  h2.contact__title {
    font-size: 30px;
  }
  .form-group label.mobile_date_form,
  input.mobile_date_input {
    width: 60%;
    margin-left: 0;
  }

  input.name_space {
    width: 100%;
  }
}
/* Footer Section Component */

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
@media (max-width: 360px) {
  p.desc__footer {
    width: 300px;
  }
}
</style>
