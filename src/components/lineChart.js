import Vue from 'vue'
import { Line } from 'vue-chartjs'

export default Vue.component('line-chart', {
  extends: Line,
  props: {
    chartData: Array,
    options: Array
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  },
})
