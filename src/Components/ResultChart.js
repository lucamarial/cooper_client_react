import React, { Component } from 'react'
import { getData } from '../Modules/PerformanceData'
import { Line } from 'react-chartjs-2'

class ResultChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      performanceData: null
    }
  }

  componentDidMount() {
    this.getPerformanceData()
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({ performanceData: result.data.entries }, () => {
      this.props.resultChartUpdated();
    })
  }

  render() {
    let dataChart;

    if (this.props.updateResultChart === true) {
      this.getPerformanceData();
    }
    if (this.state.performanceData != null) {

      const distances = []
      const labels = []

      this.state.performanceData.forEach(item => {
        distances.push(item.data.distance)
        labels.push(item.data.message)
      })

      const data = {
        datasets: [
          {
            data: distances,
            label: 'My Performance',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
          }
        ], labels: labels
      }
      dataChart = (
        <Line data={data} />
      )
    }
    return (
      <div>
        {dataChart}
      </div>
    )
  }
}

export default ResultChart;
