import React from 'react'
import { Card, Input, Button } from 'semantic-ui-react'

const SignUpForm = (props) => {
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>Sign Up:</Card.Header>
            <form id="login-form">
              <div id="input">
                <Input id="email" placeholder="Email" onChange={props.inputChangeHandler}/>
              </div>

              <div id="input">
                <Input id="password" placeholder="Password" onChange={props.inputChangeHandler}/>
              </div>

              <div id="input">
                <Input id="password_confirmation" placeholder="Password Confirmation" onChange={props.inputChangeHandler}/>
              </div>
              
              <Button id="submit" onClick={ (e) => props.signupHandler(e) }>Sign Up</Button>

              <Button id="cancel" onClick= { () => props.cancelHandler() }>Cancel</Button>
            </form>
        </Card.Content>
      </Card>
    </div>
  )
}

export default SignUpForm
