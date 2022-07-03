
import React, { Fragment, useEffect, useState } from 'react';
import './../App.css';
import jsonFile from './../todos.json';
import Input from './Input';
import InputForm from './InputForm';

const CrudTemplate = () => {

  const [todos, setTodos] = useState(false);
  const [form, setForm] = useState(false);
  const [formName, setFormName] = useState('');
  const [col, setCol] = useState('');

  useEffect(() => {
    setTodos(jsonFile);
    console.log(jsonFile)
  }, [jsonFile])

  const insertUser = () => {
    setForm(!form);
    setFormName((prev) => prev = '< INSERT FORM >');
    (!form) ? setCol((prev) => prev = 'col-8') : setCol((prev) => prev = 'col-12');
  }

  return (
    <div id="wrap">
      <div className="container">
        <div className="row">
          <div className={col}>
            <table className='table table-hover'>
              <thead>
                <tr className='table-light' style={{ textAlign: "center" }}>
                  {/* {
                (todos) && (
                  Object.keys(todos[0]).map(headList => (
                    <th key={headList}>{headList}</th>
                  ))
                )
              } */}
                  <th>ID</th>
                  <th>USER ID</th>
                  <th>TITLE</th>
                  <th>COMPLETED</th>
                  <th style={{ textAlign: "right" }}>
                    <Input
                      type={"button"}
                      value={"CREATE"}
                      onClick={insertUser}
                    />
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  (todos) && todos.map(bodyList => (
                    <tr key={bodyList.id} style={{ textAlign: "center" }}>
                      <td>{bodyList.id}</td>
                      <td>{bodyList.userId}</td>
                      <td style={{ textAlign: "left" }}>{bodyList.title}</td>
                      <td>
                        <Input
                          type={"checkbox"}
                          defaultChecked={(bodyList.completed) ? true : false}
                        />
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <Input
                          type={"button"}
                          value={"UPDATE"}
                        />
                        <Input
                          type={"button"}
                          value={"DELETE"}
                        />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          {
            (form) && (
              <InputForm
                todos={todos}
                setTodos={setTodos}
                formName={formName}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}
export default CrudTemplate;