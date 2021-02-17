import React from "react";

const Input = ({ name, type, value, func, ph, required, err }) => {
  return (
    <div className='input'>
      <label htmlFor={name}>
        {name}
        {required ? "*" : ""}
      </label>
      <input
        className={err ? "input--err" : ""}
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
