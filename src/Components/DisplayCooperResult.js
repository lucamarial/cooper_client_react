import React, { Component } from 'react';
import CooperCalculator from '../Modules/CooperCalculator';

class DisplayCooperResult extends Component {

  calculate() {
    return CooperCalculator(this.props.distance, this.props.gender, this.props.age);
  }

  async saveCooperData() {
    const result = this.calculate();
    try {
      await this.saveData(result);
      this.props.entryHandler();
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    let results;
    let saveButton;

    if (this.props.authenticated === true) {
      saveButton = (
        <>
          <button id="save-result" onClick={this.saveCooperData.bind(this)}>Save entry</button>
        </>
      )
    }

    if (this.props.age !== '' && this.props.distance !== '') {
      results =
        <>
          <p>{this.props.age} y/o {this.props.gender} running {this.props.distance} meters.</p>
          <p>Result: {this.calculate()}</p>
          {saveButton}
        </>
    }
    return (
      <div>
        {results}
      </div>
    )
  }
}

export default DisplayCooperResult
