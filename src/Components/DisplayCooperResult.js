import React, { Component } from 'react';
import CooperCalculator from '../Modules/CooperCalculator';
import { saveData } from '../Modules/PerformanceData';
import { Button } from 'semantic-ui-react'

class DisplayCooperResult extends Component {

  calculate() {
    return CooperCalculator(this.props.distance, this.props.gender, this.props.age);
  }

  async saveCooperData() {
    const result = this.calculate();
    try {
      await saveData(result);
      this.props.entryHandler();
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    let results;
    let saveButton;

    if (this.props.authenticated === true && this.props.entrySaved === false) {
      saveButton = (
        <>
          <Button id="save-result" onClick={this.saveCooperData.bind(this)}>Save entry</Button>
        </>
      )
    } else if (this.props.authenticated === true && this.props.entrySaved === true) {
      saveButton = (
        <>
          <p>Your entry was saved</p>
        </>
      )
    }

    if (this.props.age !== '' && this.props.distance !== '') {
      results = (
        <>
          <p>{this.props.age} y/o {this.props.gender} running {this.props.distance} meters.</p>
          <p>Result: {this.calculate()}</p>
          {saveButton}
        </>
      )
    }
    return (
      <div>
        {results}
      </div>
    )
  }
}

export default DisplayCooperResult
