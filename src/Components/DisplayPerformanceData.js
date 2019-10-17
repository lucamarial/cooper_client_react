import React, { Component } from 'react';
import { getData } from '../Modules/PerformanceData';

class DisplayPerformanceData extends Component {
  state = {
    performanceData: null
  }

  componentDidMount() {
    this.getPerformanceData()
  }

  async getPerformanceData() {
    let result = await getData();
    this.setState({ performanceData: result.data.entries }, () => {
      this.props.indexUpdated();
    })
  }

  render() {
    let dataIndex;

    if (this.props.updateIndex === true) {
      this.getPerformanceData();
    }
    if (this.state.performanceData != null) {
      dataIndex = (
        <div>
          { this.state.performanceData.map(item => {
            return <div key={ item.id }>{ item.data.message}</div>
          })}
        </div>
      )
    }

    return (
      <div>
        {dataIndex}
      </div>
    )
  }
}

export default DisplayPerformanceData 