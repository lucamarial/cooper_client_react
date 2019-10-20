import React from 'react';
import { Card, Input, Button } from 'semantic-ui-react'

const LoginForm = (props) => {
  return (
    <Card>
      <Card.Content>
        <Card.Header>Login:</Card.Header>
          <form id="login-form">
            <div id="input">
              <Input id="email" placeholder="Email" onChange={props.inputChangeHandler}/>
            </div>

            <div id="input">
              <Input id="password" placeholder="Password" onChange={props.inputChangeHandler}/>
            </div>
            
            <Button id="submit" onClick={ (e) => props.loginHandler(e) }>Submit</Button>
          </form>
      </Card.Content>
    </Card>
  )
}

export default LoginForm;
