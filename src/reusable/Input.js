import React from "react";

const Input = ({ name, type, value, func, ph }) => {
  return (
    <div className='input'>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        value={value}
        onChange={func}
        name={name}
        placeholder={ph}
      />
    </div>
  );
};

export default Input;
