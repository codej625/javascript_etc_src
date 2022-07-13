
import React, { Fragment, useEffect, useState } from 'react';
import './../App.css';
import jsonFile from './../todos.json';
import Input from './Input';
import InputForm from './InputForm';

const CrudTemplate = () => {

  const [todos, setTodos] = useState(false);
  const [formState, setFormState] = useState(false);
  const [formName, setFormName] = useState('');
  const [col, setCol] = useState('');
  const [updateState, setUpdateState] = useState(false);
  const [updateId, setUpdateId] = useState('');

  useEffect(() => {
    setTodos(jsonFile);
  }, [jsonFile])

  const insertUser = () => {
    setUpdateState(false)
    setFormState(!formState);
    setFormName(prev => prev = '< INSERT FORM >');
    (!formState) ? setCol('col-8') : setCol('col-12');
  }

  const updateUser = (key) => {
    setFormState(!formState);
    setFormName(prev => prev = '< UPDATE FORM >');
    (!formState) ? setCol('col-8') : setCol('col-12');
    setUpdateState(true);
    setUpdateId(key)
    /*
    const test = todos.map(up =>
      (up.id === updateTest.id) ? { ...up, ...updateTest } : up
    );
    setTotos([...todos.slice(0, id), updateTest, ...todos.slice(id + 1)]);
    */
    // console.log([...todos.slice(0, id - 1)])
    // console.log(updateTest)
    // console.log([...todos.slice(0, id - 1), updateTest])
    // console.log([...todos.slice(id)])
    // console.log([...todos.slice(0, id - 1), updateTest, ...todos.slice(id)])
    // setTodos([...todos.slice(0, key - 1), updateTest, ...todos.slice(key)]);
    
  };

  const deleteUser = (userId) => {
    const confirmId = window.confirm('삭제하시겠습니까?');
    confirmId && setTodos(todos.filter(user => user.id !== userId));
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
                  (todos) && todos.map((bodyList, idx) => (
                    <tr key={bodyList.id} style={{ textAlign: "center" }}>
                      <td>{idx + 1}</td>
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
                          onClick={() => updateUser(bodyList.id)}
                        />
                        <Input
                          type={"button"}
                          value={"DELETE"}
                          onClick={() => deleteUser(bodyList.id)}
                        />
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
          {
            (formState) && (
              <InputForm
              
                todos={todos}
                setTodos={setTodos}
                formName={formName}
                setFormState={setFormState}
                setCol={setCol}
                formState={formState}
                updateState={updateState}
                setUpdateState={setUpdateState}
                setUpdateId={setUpdateId}
                updateId={updateId}
              />
            )
          }
        </div>
      </div>
    </div>
  )
}
export default CrudTemplate;