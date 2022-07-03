import React, { Fragment, useEffect, useState } from 'react';
import './../App.css';
import Input from './../component/Input';

const InputForm = ({ todos, setTodos, formName }) => {

  return (
    <div className="col-4">
      <div className="container">
        <div className="card">
          <table className="table">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th colSpan={3}>{formName}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ID</td>
                <td colSpan={2}>
                  <Input
                    type="number"
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td>USER ID</td>
                <td>
                  <Input
                    type="number"
                  />
                </td>
              </tr>
              <tr>
                <td>TITLE</td>
                <td>
                  <Input
                    type="text"
                  />
                </td>
              </tr>
              <tr>
                <td>COMPLETED</td>
                <td>
                  <Input
                    type="checkbox"
                  />
                </td>
              </tr>
              <tr className="table-light">
                <td colSpan={3} style={{ textAlign: "right" }}>
                  <Input
                    type="button"
                    value={"SUBMIT"}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default InputForm;