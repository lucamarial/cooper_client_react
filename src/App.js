import React, { Component } from 'react'
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from './Components/InputFields';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      gender: 'female',
      age: ''
    }
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <InputFields
          inputChangeHandler={this.onChange.bind(this)}
        />

        <DisplayCooperResult
          distance = { this.state.distance }
          gender = { this.state.gender }
          age = { this.state.age }
        />
      </div>
    );
  }
}

export default App;
