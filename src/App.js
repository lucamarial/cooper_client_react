import React, { Component } from 'react'
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from './Components/InputFields';
import LoginForm from './Components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: '',
      gender: 'female',
      age: '',
      renderLoginForm: false
    }
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  render() {
    let renderLogin

    if (this.state.renderLoginForm === true) {
      renderLogin = (
        <LoginForm />
      )
    } else {
      renderLogin = (
        <button id="login" onClick={ () => this.setState({ renderLoginForm: true }) }>Login</button>
      )
    }
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

        { renderLogin }

      </div>
    );
  }
}

export default App;
