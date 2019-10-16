import React from 'react';

const Input = ({ label, name, value, onChange, type, error }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}
 
export default Input;