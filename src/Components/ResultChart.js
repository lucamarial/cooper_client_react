import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

export default class ResultChart extends Component {
  state = {
    performanceData: null
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
    return (
      <div>
        
      </div>
    )
  }
}

export default ResultChart;
