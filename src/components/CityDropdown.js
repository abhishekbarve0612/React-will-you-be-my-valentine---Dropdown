import React from "react";
const CityDropdown = ({ states, selectedState }) => {
  const cityList = states[0].city;
  console.log(typeof cityList);
  return (
    <div>
      <label htmlFor="cityList">Select City</label>
      <select name="cityList" id="city-name">
        {cityList.map((city, key) => (
          <option value={key}>{city.name}</option>
        ))}
      </select>
    </div>
  );
};

export default CityDropdown;
