import React from 'react';

const MySelect = ({ value, handleChange }) => (
  <div className="selectContainer">
    <select className="select" value={value.filtered} onChange={handleChange}>
      <option>Все </option>
      <option>Выполненные </option>
      <option>Невыполненные </option>
    </select>
  </div>
);
export default MySelect;
