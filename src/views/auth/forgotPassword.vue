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

            <b-button
              class="register label "
              variant="warning"
              @click="registerUser()"
              >Sign Up</b-button
            >
          </b-row>
          <b-col class="login">
            <center class="login-text">Forgot Password</center>
            <b-form
              @submit.prevent="onSubmit"
              @reset.prevent="onReset"
              class="login-1"
            >
              <label for="fname" class="label-login">Email adress:</label><br />
              <input
                type="email"
                v-model="form.user_email"
                placeholder="Input Your Email ..."
                class="form-input"
              />

              <div class="button-login">
                <b-col
                  ><button type="buttom" class="login-buttom">
                    Send Email
                  </button></b-col
                >
                <br />
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
import alert from '../../mixins/alert'
import Footer from '../../components/_base/Footer'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'login',
  mixins: [alert],
  components: {
    Footer
  },
  data() {
    return {
      form: {
        user_email: '',
        user_password: ''
      }
    }
  },
  computed: {
    ...mapState(['name']),
    ...mapState({ dataName: 'name' })
  },
  methods: {
    // mapAction & mapMutation
    ...mapActions(['login']),
    onSubmit() {
      this.login(this.form)
        .then(result => {
          console.log(result)
          this.successAlert(result.data.msg)
          this.$router.push('/')
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
    },
    onReset() {
      this.form = {
        user_email: '',
        user_password: ''
      }
    },
    registerUser() {
      this.$router.push({
        name: 'register'
      })
    }
  }
}
</script>

<style scoped>
.forgot-label {
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: underline;

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
.label {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #6a4029;
}
.label-login {
  margin-top: 5%;
  width: 157px;
  height: 25px;
  left: 817px;
  top: 271px;

  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;

  color: #4f5665;
}
.button-login {
  margin-top: 5%;
  margin-right: 25%;
}
.login-buttom {
  width: 500px;
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
