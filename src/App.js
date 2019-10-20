import React, { Component } from 'react'
import DisplayCooperResult from './Components/DisplayCooperResult';
import InputFields from './Components/InputFields';
import LoginForm from './Components/LoginForm';
import { authenticate, authenticateSignUp } from './Modules/Auth';
import DisplayPerformanceData from './Components/DisplayPerformanceData';
import ResultChart from './Components/ResultChart';
import SignUpForm from './Components/SignUpForm';
import {
  Container,
  Grid,
  Header,
  Button,
  Card,
  Icon
} from 'semantic-ui-react'

class App extends Component {
  state = {
    distance: '',
    gender: 'female',
    age: '',
    renderLoginForm: false,
    renderSignUpForm: false,
    authenticated: false,
    email: '',
    password: '',
    password_confirmation: '',
    lmessage: '',
    smessage: '',
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
      this.setState({ lmessage: resp.message, renderLoginForm: false })
    }
  }

  async onSignUp(e) {
    e.preventDefault();
    let resp = await authenticateSignUp(this.state.email, this.state.password, this.state.password_confirmation)
    if (resp.authenticated === true) {
      this.setState({ authenticated: true });
    } else {
      this.setState({ smessage: resp.message, renderSignUpForm: false })
    }
  }

  render() {
    let renderLogin;
    let user;
    let performanceDataIndex;
    let renderChart;
    let renderSignUp;

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
            <Button id="show-index" onClick={() => this.setState({ renderIndex: false })}>Hide past entries</Button>
          </>
        )
      } else {
        performanceDataIndex = (
          <Button id="show-index" onClick={() => this.setState({ renderIndex: true })}>Show past entries</Button>
        )
      }
      if (this.state.renderResultChart === true) {
        renderChart = (
          <>
            <Button id="show-chart" onClick={() => this.setState({ renderResultChart: false })}>Hide Chart</Button>
            <ResultChart
              updateResultChart = { this.state.updateResultChart }
              resultChartUpdated = { this.resultChartUpdated.bind(this) }
            />
          </>
        )
      } else {
        renderChart = (
          <Button id="show-chart" onClick={() => this.setState({ renderResultChart: true})}>Show Chart</Button>
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
            <Button id="login" onClick={ () => this.setState({ renderLoginForm: true }) }>Login</Button>
            <p>{this.state.lmessage}</p>
          </>
        )
      }
      if (this.state.renderSignUpForm === true) {
        renderSignUp = (
          <>
            <SignUpForm 
              signupHandler={this.onSignUp.bind(this)}
              inputChangeHandler={this.onChange.bind(this)}
            />
          </>
        )
      } else {
        renderSignUp = (
        <>
          <Button id="signup" onClick={ () => this.setState({ renderSignUpForm: true }) }>Sign Up</Button>
          <p>{this.state.smessage}</p>
        </>
      )
    }
  }
    
    return (
      <>
        <Container>
          <Header
            id="h1"
            as="h1"
            textAlign="center"
          >
            Cooper Test
          </Header>

          <Grid centered columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Container id="container">
                  <Card>
                    <Card.Content>
                      <Card.Header>Calculator</Card.Header>
                      <Card.Description>
                        Input data and get your result!
                      </Card.Description>
                      <InputFields
                        inputChangeHandler={this.onChange.bind(this)}
                      />
                    </Card.Content>

                    <Card.Content>
                      <Icon id="heart" name='heartbeat' />
                      <DisplayCooperResult
                        distance = { this.state.distance }
                        gender = { this.state.gender }
                        age = { this.state.age }
                        authenticated={ this.state.authenticated }
                        entrySaved = { this.state.entrySaved }
                        entryHandler = { this.entryHandler.bind(this) }
                      />
                    </Card.Content>
                  </Card>
                </Container>
              </Grid.Column>

              <Grid.Column>
                <Container id="container">
                  <Card>
                    <Card.Content>
                      <Card.Header>
                        Past Results
                      </Card.Header>
                      <Card.Description>
                        {performanceDataIndex}
                      </Card.Description>
                    </Card.Content>
                  </Card> 
                </Container>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <div>
                { renderLogin }
              </div>

              <div>
                { renderSignUp }
              </div>
            </Grid.Row>

            <Container>
              <Grid.Row>
                {renderChart}  
              </Grid.Row> 
            </Container>
          </Grid>
        </Container>
      </>
    );
  }
}

export default App;
