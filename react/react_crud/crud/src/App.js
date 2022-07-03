import './App.css';
import React, { Fragment, useEffect, useState } from 'react';
import CrudTemplate from './component/CrudTemplate';
//======================================================================
const App = () => {

  //======================================================================
  // const [todos, setTotos] = useState(false);
  // const [updateState, setUpdateState] = useState(false);
  // const [update, setUpdate] = useState({
  //   'userId': '',
  //   'id': '',
  //   'title': '',
  //   'completed': ''
  // });
  // const [updateTest, setUpdateTest] = useState({
  //   'userId': '',
  //   'id': 1,
  //   'title': '업데이트',
  //   'completed': true
  // });
  //======================================================================
  // useEffect(() => {
  //   setTotos(datas);
  // }, []);
  //======================================================================
  // const isUpdate = (id) => {
  //   setUpdateState(!updateState);
  //   const test = todos.map(up =>
  //     (up.id === updateTest.id) ? { ...up, ...updateTest } : up
  //   );
  //   setTotos(test)
  // };
  //======================================================================
  // const isDelete = (id) => {
  //   if (window.confirm('삭제하시겠습니까?')) {
  //     setTotos(todos.filter(del => del.id !== id));
  //   };
  // }
  //======================================================================
  return (
    <Fragment>
      <CrudTemplate />
    </Fragment>
    // <Fragment>
    //   <table>
    //     <thead>
    //       <tr>
    //         {
    //           todos && (
    //             Object.keys(todos[0]).map(data => (
    //               <th key={data}>{data}</th>
    //             ))
    //           )
    //         }
    //         <th colSpan={2}></th>
    //       </tr>
    //       {
    //         updateState && (
    //           <tr>
    //             <td><input type={"text"} readOnly /></td>
    //             <td><input type={"text"} /></td>
    //             <td><input type={"text"} /></td>
    //             <td><input type={"checkbox"} /></td>
    //             <td colSpan={2}></td>
    //           </tr>
    //         )
    //       }
    //     </thead>
    //     <tbody>
    //       {
    //         todos && (
    //           todos.map(data => (
    //             <tr key={data.id}>
    //               <td>{data.id}</td>
    //               <td>{data.userId}</td>
    //               <td>{data.title}</td>
    //               <td><input type={"checkbox"} defaultChecked={(data.completed) ? true : false} /></td>
    //               <td><input type={"button"} value={"UPDATE"} onClick={() => isUpdate(data.id)} /></td>
    //               <td><input type={"button"} value={"DELETE"} onClick={() => isDelete(data.id)} /></td>
    //             </tr>
    //           ))
    //         )
    //       }
    //     </tbody>
    //   </table>
    // </Fragment >
  );
}

export default App;
