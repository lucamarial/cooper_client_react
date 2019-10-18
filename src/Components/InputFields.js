import React from 'react';

const InputFields = (props) => {
  return (
  <>
    <select id="gender" onChange={props.inputChangeHandler}>
      <option value="female">Female</option>
      <option value="male">Male</option>
    </select>

  <div>
    <input id="distance" placeholder="Distance" onChange={props.inputChangeHandler}></input>
  </div>

  <div>
    <input id="age" placeholder="Age" onChange={props.inputChangeHandler}></input>
  </div>
  </>
  )
}

export default InputFields;

