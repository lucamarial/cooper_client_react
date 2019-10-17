import React from 'react';

const LoginForm = () => {
  return (
    <form>
      <div>
        <label>Email</label>
        <input id="email"></input>
      </div>

      <div>
        <label>Password</label>
        <input id="password"></input>
      </div>
      
      <button id="submit">Submit</button>
    </form>
  )
}

export default LoginForm
