<template>
  <div>
    <b-container>
      <b-row>
        <b-col class="col-1-picture">Column</b-col>
        <b-col class="col-1-login">
          <b-row>
            <b-col>
              <div class="label">
                <b-col><img src="../../assets/logo.png" />CoffeShop </b-col>
              </div>
            </b-col>
            <b-col class="register label">
              <b-button variant="warning" @click="loginUser()">LOGIN</b-button>
            </b-col>
          </b-row>
          <b-col class="login">
            <center class="login-text">SIGN UP</center>

            <b-form
              @submit.prevent="onSubmit"
              @reset.prevent="onReset"
              class="login-1"
            >
              <label for="fname" class="label-register">Email adress:</label
              ><br />
              <input
                type="email"
                v-model="form.user_email"
                placeholder="Input Your Email ..."
                class="form-input"
              /><br />
              <label for="fname" class="label-register">Password :</label><br />
              <input
                type="password"
                v-model="form.user_password"
                placeholder="Input Your Password "
                class="form-input"
              />
              <br />
              <br />
              <label for="number" class="label-register">Number Phone :</label>
              <input
                type="number"
                v-model="form.user_phone"
                placeholder="Input Your Number."
                class="form-input"
              />
              <br />

              <div class="button-login">
                <b-col
                  ><button
                    type="submit"
                    class="login-buttom"
                    @click="postRegister()"
                  >
                    REGISTER
                  </button></b-col
                >
                <br />
                <b-col>
                  <button type="buttom" class="sign-login">
                    <img src="../../assets/Socmed/google.png" alt="" /> Sign up
                    with Google
                  </button></b-col
                >
              </div>
            </b-form>
          </b-col>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
// import axios from 'axios'
import alert from '../../mixins/alert'
import Footer from '../../components/_base/Footer'
import { mapActions } from 'vuex'
export default {
  name: 'login',
  mixins: [alert],
  components: {
    Footer
  },
  data() {
    return {
      form: {
        user_name: '',
        user_lastname: '',
        user_birth: '',
        user_gender: '',
        user_phone: '',
        user_address: '',
        user_img: '',
        user_email: '',
        user_password: ''
      }
    }
  },
  computed: {},
  methods: {
    ...mapActions(['register']),
    onSubmit() {
      this.register(this.form)
        .then(result => {
          this.makeToast(
            'Congratulations',
            `${result.data.data.fullName} Login successfully`,
            'success'
          )
        })
        .catch(error => {
          this.makeToast(`${error}`, 'bad request', 'danger')
        })
    },
    loginUser() {
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

<style>
.forgot-label {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: underline;

  color: #6a4029;
}
.label {
  margin-left: 20%;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #6a4029;
}
.col-1-picture {
  background-image: url('../../assets/bg/bg-login.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 1000px;
}
.col-1-login {
  margin: 5%;
}
.logo {
  font-family: 'Kalam', cursive;
  font-size: 100%;
  text-align: left;
}
.register {
  text-align: right;
  border-radius: 100px;
}
.register-text {
  border-radius: 20px;
  background: violet;
}
.login {
  margin-top: 10%;
}
.login-text {
  margin-left: 17%;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 41px;

  color: #6a4029;
}
.login-1 {
  margin-top: 3%;
  margin-left: 10%;
  margin-right: 10%;
}
.form-input {
  margin-bottom: 2%;
  width: 515px;
  height: 60px;
  left: 817px;
  top: 309px;

  background: #ffffff;
  border: 1px solid #4f5665;
  box-sizing: border-box;
  border-radius: 20px;

  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;

  color: #9f9f9f;
}
.label-register {
  margin-top: 5%;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  color: #4f5665;
}
.button-login {
  margin-top: 5%;
}
.login-buttom {
  width: 505px;
  height: 70px;
  margin-right: 5%;

  background: #ffba33;
  box-shadow: 0px 6px 20px rgba(255, 186, 51, 0.4);
  border-radius: 20px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  color: #6a4029;
}
.sign-login {
  width: 505px;
  height: 60px;
  left: 817px;
  top: 309px;
  background: White;
  border-radius: 20px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  color: black;
}
</style>
