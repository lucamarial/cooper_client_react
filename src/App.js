import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <label>Distance</label>
          <input id="distance"></input>
        </div>

        <select id="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <div>
          <label>Age</label>
          <input id="age"></input>
        </div>
      </div>
    )
  }
}

export default App;
