import React from "react";
const StateDropdown = ({ states, changeState }) => {
  return (
    <div>
      <label htmlFor="state">States:</label>
      <select
        className="form-control"
        name="stateList"
        id="state-name"
        onChange={(e) => changeState(e)}
      >
        {" "}
        {states.map((state, key) => {
          return (
            <option value={key} key={key}>
              {state.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default StateDropdown;
