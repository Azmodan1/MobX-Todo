import React from 'react';

const MySelect = ({ value, handleChange }) => (
  <select className='select' value={value.filtered} onChange={handleChange}>
    <option>Все </option>
    <option>Выполненные </option>
    <option>Невыполненные </option>
  </select>
);
export default MySelect;
