<template>
  <main class="grey lighten-5 pa-2">
    <section>
      <h1 class="display-1">{{ queryName }}</h1>
      <v-row align="center" justify="center">
        <stat-card v-for="card in countryDataCards" :key="card.title" :cardTitle="card.title" :bgColor="card.bgColor" :cardAmount="card.amount" :cardAmountNew="card.amountNew" :cardIcon="card.icon" />
      </v-row>
    </section>
    <section>
      <h2 class="display-1">Visuals</h2>
      <v-row align="center" justify="center">
        <line-chart class="ma-1" v-for="visual in countryDataVisuals" :key="visual.id" :chart-data="visual.chartData" :options="visual.option"></line-chart>
      </v-row>
    </section>
  </main>
</template>
<script>
import StatCard from './StatCard'
import LineChart from './lineChart'

export default {
  name: 'Country',
  props: ['queryName'],
  data () {
    return {
      cards: [],
      visuals: []
    }
  },
  components: {
    StatCard,
    LineChart
  },
  mounted () {
    // this.$store.dispatch('newCountry', this.queryName)
    // this.$store.dispatch('newCountryName', this.queryName)
    // this.updateCountryStats()
  },
  methods: {
    updateCountryStats () {
      let data = this.$store.getters.country

      this.cards.push({ title: 'total cases', bgColor: 'primary lighten-2', amount: data.cases, amountNew: data.cases, icon: 'mdi-alert-box' })
      this.cards.push({ title: 'deaths', bgColor: 'red accent-2', amount: data.deaths, amountNew: 0, icon: 'mdi-emoticon-dead' })
      this.cards.push({ title: 'recoveries', bgColor: 'teal lighten-1', amount: data.recoveries, amountNew: 0, icon: 'mdi-hospital-box' })

      this.visuals = []

      this.visuals.push({
        id: 1,
        chartData: {
          labels: data.visualLabels,
          datasets: [{
            label: 'Total cases',
            backgroundColor: '#6aaaff',
            data: data.visualData.cases
          }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      })

      this.visuals.push({
        id: 2,
        chartData: {
          labels: data.visualLabels,
          datasets: [{
            label: 'Deaths',
            backgroundColor: '#ff5252',
            data: data.visualData.deaths
          }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      })

      this.visuals.push({
        id: 3,
        chartData: {
          labels: data.visualLabels,
          datasets: [{
            label: 'Recoveries',
            backgroundColor: '#26a69a',
            data: data.visualData.recoveries
          }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      })
    }
  },
  computed: {
    countryDataCards () {
      let countryData = this.$store.getters.country
      let cards = []

      cards.push({ title: 'total cases', bgColor: 'primary lighten-2', amount: countryData.cases, amountNew: 0, icon: 'mdi-alert-box' })
      cards.push({ title: 'deaths', bgColor: 'red accent-2', amount: countryData.deaths, amountNew: 0, icon: 'mdi-emoticon-dead' })
      cards.push({ title: 'recoveries', bgColor: 'teal lighten-1', amount: countryData.recoveries, amountNew: 0, icon: 'mdi-hospital-box' })

      return cards
    },
    countryDataVisuals () {
      let countryData = this.$store.getters.country
      let visuals = []

      visuals.push({
        id: 1,
        chartData: {
          labels: countryData.visualLabels,
          datasets: [{
            label: 'Total cases',
            backgroundColor: '#6aaaff',
            data: countryData.visualData.cases
          }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      })

      visuals.push({
        id: 2,
        chartData: {
          labels: countryData.visualLabels,
          datasets: [{
            label: 'Deaths',
            backgroundColor: '#ff5252',
            data: countryData.visualData.deaths
          }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      })

      visuals.push({
        id: 3,
        chartData: {
          labels: countryData.visualLabels,
          datasets: [{
            label: 'Recoveries',
            backgroundColor: '#26a69a',
            data: countryData.visualData.recoveries
          }]
        },
        options: { responsive: true, maintainAspectRatio: false }
      })

      return visuals
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.small {
  width: 100%;
  height: 100%;
  max-width: 600px;
  margin: auto;
}

</style>
