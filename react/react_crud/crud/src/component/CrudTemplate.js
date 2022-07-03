
import React, { Fragment, useEffect, useState } from 'react';
import jsonFile from './../todos.json';

const CrudTemplate = () => {

  const [todos, setTodos] = useState(false);
  const [test, setTest] = useState(false);

  useEffect(() => {
    setTodos(jsonFile);
    console.log(jsonFile)
  }, [jsonFile])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className='table table-hover'>
            <thead>
              <tr className='table-light'>
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
                <th><input type="button" value={"CREATE"} /></th>
              </tr>
            </thead>
            <tbody>
              {
                (todos) && todos.map(bodyList => (
                  <tr>
                    <td>{bodyList.id}</td>
                    <td>{bodyList.userId}</td>
                    <td>{bodyList.title}</td>
                    <td><input type={"checkbox"} defaultChecked={(bodyList.completed) ? true : false} /></td>
                    <td>
                      <input type="button" value={"UPDATE"} />
                      <input type="button" value={"DELETE"} />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        {
          test&&(
            <div className="col">이진우</div>
          )
        }
      </div>
    </div>
  )
}
export default CrudTemplate;