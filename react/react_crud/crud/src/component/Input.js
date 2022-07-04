import React, { Fragment, useEffect, useState } from 'react';

const Input = ({ type, value, onClick, defaultChecked, onChange, name }) => {

  return (
    <Fragment>
      <input
        className="btn btn-outline-secondary"
        name={name}
        type={type}
        value={value}
        onClick={onClick}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
    </Fragment>
  )
}
export default Input;