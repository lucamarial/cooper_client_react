import React, { Component } from 'react'
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from './Components/InputFields';
import LoginForm from './Components/LoginForm';
import { authenticate } from './Modules/Auth';
import DisplayPerformanceData from './Components/DisplayPerformanceData';
import ResultChart from './Components/ResultChart';

class App extends Component {
  state = {
    distance: '',
    gender: 'female',
    age: '',
    renderLoginForm: false,
    authenticated: false,
    email: '',
    password: '',
    message: '',
    entrySaved: false,
    renderIndex: false,
    updateIndex: false,
    renderResultChart: false,
    updateResultChart: false
  }

  onChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
      entrySaved: false
    })
  }

  entryHandler() {
    this.setState({ entrySaved: true, updateIndex: true, updateResultChart: true });
  }

  indexUpdated() {
    this.setState({ updateIndex: false });
  }

  resultChartUpdated() {
    this.setState({ updateResultChart: false})
  }

  async onLogin(e) {
    e.preventDefault();
    let resp = await authenticate(this.state.email, this.state.password)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ message: resp.message, renderLoginForm: false })
    }
  }

  render() {
    let renderLogin;
    let user;
    let performanceDataIndex;
    let renderChart;

    if (this.state.authenticated === true) {
      user = JSON.parse(sessionStorage.getItem('credentials')).uid;
      renderLogin = (
        <p>Hi {user}</p>
      )
      if (this.state.renderIndex === true) {
        performanceDataIndex = (
          <>
            <DisplayPerformanceData
              updateIndex = { this.state.updateIndex }
              indexUpdated = { this.indexUpdated.bind(this) }
            />
            <button id="show-index" onClick={() => this.setState({ renderIndex: false })}>Hide past entries</button>
          </>
        )
      } else {
        performanceDataIndex = (
          <button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</button>
        )
      }
      if (this.state.renderResultChart === true) {
        renderChart = (
          <>
            <ResultChart
              updateResultChart = { this.state.updateResultChart }
              resultChartUpdated = { this.resultChartUpdated.bind(this) }
            />
            <button id="show-chart" onClick={() => this.setState({ renderResultChart: false })}>Hide Chart</button>
          </>
        )
      } else {
        renderChart = (
          <button id="show-chart" onClick={() => this.setState({ renderResultChart: true})}>Show Chart</button>
        )
      }
    } else { 
      if (this.state.renderLoginForm === true) {
        renderLogin = (
        <>
          <LoginForm 
            loginHandler={this.onLogin.bind(this)}
            inputChangeHandler={this.onChange.bind(this)}
          />
        </>
        )
      } else {
        renderLogin = (
          <>
            <button id="login" onClick={ () => this.setState({ renderLoginForm: true }) }>Login</button>
            <p>{this.state.message}</p>
          </>
        )
      }
    }
    
    return (
      <>
        <InputFields
          inputChangeHandler={this.onChange.bind(this)}
        />

        <DisplayCooperResult
          distance = { this.state.distance }
          gender = { this.state.gender }
          age = { this.state.age }
          authenticated={ this.state.authenticated }
          entrySaved = { this.state.entrySaved }
          entryHandler = { this.entryHandler.bind(this) }
        />

        {performanceDataIndex}

        <div>
          {renderChart}
        </div>

        <div>
          { renderLogin }
        </div>
      </>
    );
  }
}

export default App;
