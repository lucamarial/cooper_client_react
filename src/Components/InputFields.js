import React from 'react';
import { Input } from 'semantic-ui-react' 

const InputFields = (props) => {
  return (
  <>
    <div id="input">
      <Input icon="map" iconPosition="left" id="distance" placeholder="Distance" onChange={props.inputChangeHandler}/>
    </div>

    <div id="input">
      <Input icon="blind" iconPosition="left" id="age" placeholder="Age" onChange={props.inputChangeHandler}/>
    </div>

    <select id="gender" onChange={props.inputChangeHandler}>
      <option value="female">Female</option>
      <option value="male">Male</option>
    </select>
  </>
  )
}

export default InputFields;

