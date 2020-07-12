import React from "react";

const Input = ({ name, label, error, ...restProps }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...restProps} name={name} id={name} className="form-control" />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
