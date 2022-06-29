import './App.css';
import datas from './todos.json';
import React, { Fragment, useEffect, useState } from 'react';
//======================================================================
function App() {
  //======================================================================
  const [todos, setTotos] = useState(false);
  const [update, setUpdate] = useState(false);
  //======================================================================
  useEffect(() => {
    setTotos(datas);
  }, []);
  //======================================================================
  const isUpdate = () => {
    setUpdate(!update);
    console.log("update")
  };
  //======================================================================
  const isDelete = (id) => {
    if (window.confirm('삭제하시겠습니까?')) {
      setTotos(todos.filter(del => del.id !== id));
    };
  }
  //======================================================================
  return (
    <Fragment>
      <table>
        <thead>
          <tr>
            {
              todos && (
                Object.keys(todos[0]).map(data => (
                  <th key={data}>{data}</th>
                ))
              )
            }
            <th colSpan={2}></th>
          </tr>
        </thead>
        <tbody>
          {
            todos && (
              todos.map(data => (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.userId}</td>
                  <td>{data.title}</td>
                  <td><input type={"checkbox"} defaultChecked={(data.completed) ? true : false} /></td>
                  <td><input type={"button"} value={"UPDATE"} onClick={isUpdate} /></td>
                  <td><input type={"button"} value={"DELETE"} onClick={() => isDelete(data.id)} /></td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>
    </Fragment >
  );
}

export default App;
