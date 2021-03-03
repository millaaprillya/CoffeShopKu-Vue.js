<template>
  <div>
    <Navbar />
    <div class="bg-income">
      <h2 class="title">See how your store progress so far</h2>
      <template>
        <b-container class="bv-example-row">
          <b-row>
            <b-col class="" lg="9" sm="12">
              <div>
                <h1>Monthly Report</h1>
                <br />
                <template>
                  <mdb-container>
                    <mdb-line-chart
                      :data="lineChartData"
                      :options="lineChartOptions"
                      :width="700"
                      :height="400"
                    ></mdb-line-chart>
                  </mdb-container>
                </template>
              </div>
            </b-col>
            <b-col sm="3"
              ><div>
                <div class="card__editAccount">
                  <br />
                  <h4>Today Income</h4>
                  <center>
                    <h1>{{ income.inComeToday }}</h1>
                  </center>
                </div>
                <div class="card__editAccount">
                  <h3>Income total</h3>
                  <br />
                  <center>
                    <h2>{{ income.totalAll }}</h2>
                  </center>
                </div>
                <div>
                  <button class="aside-btn2">
                    <p>Share Report</p>
                  </button>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </div>
    <br />
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { mdbLineChart, mdbContainer } from 'mdbvue'
import Footer from '../../components/_base/Footer'
import Navbar from '../../components/_base/Navbar'
export default {
  components: {
    Footer,
    Navbar,
    mdbLineChart,
    mdbContainer
  },
  data() {
    return {
      selected: 'first',
      options: [
        { text: 'Daily', value: 'Daily' },
        { text: 'Weekly', value: 'Weekly' },
        { text: 'Monthly', value: 'Monthly' }
      ],
      lineChartData: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July'
        ],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255, 99, 132, 0.1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 0.7,
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgba(151,187,205,1)',
            borderWidth: 0.8,
            data: [28, 48, 40, 19, 86, 27, 90]
          }
        ]
      },
      lineChartOptions: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
              }
            }
          ]
        }
      }
    }
  },
  created() {
    this.getIncome()
  },
  methods: {
    ...mapActions(['getIncome']),
    ...mapMutations(['setIncome'])
  },
  computed: {
    ...mapGetters({
      income: 'setIncome_',
      profile: 'setProfile'
    })
  }
}
</script>

<style scoped>
.bg-income {
  background-color: white;
}
.title {
  text-align: center;
  margin-top: 3%;
  margin-bottom: 7%;
}
.radio-buttom {
  margin-top: 2%;
  margin-left: 42%;
  margin-right: 30%;
  margin-bottom: 5%;
}
.buttom {
  font-size: 30px;
}
.card__editAccount {
  background-color: white;
  width: 400px;
  border-radius: 10px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
  padding: 50px;
  margin: 20px;
  border-radius: 20px;
}
.card__editAccount2 {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.22);
}
.aside-btn {
  width: 80%;
  margin-top: 131px;
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  padding: 20px;

  background-color: #6a4029;
  color: white;
}
.aside-btn2 {
  width: 170%;
  margin-top: 25px;
  border-radius: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  background-color: #6a4029;
  color: white;
}
</style>
