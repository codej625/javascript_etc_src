import './../App.css';
import React, { useEffect, useState } from 'react';
import json from './../datas.json';
//=======================================================
const Main = () => {
  const [datas, setDatas] = useState(json);
  const [homeDiv, setHomeDiv] = useState(true);
  const [profileDiv, setProfileDiv] = useState(false);
  const [contactDiv, setContactDiv] = useState(false);
  const [updateDiv, setUpdateDiv] = useState(false);
  const [nameChange, setNameChange] = useState('');
  const [inputs, setInputs] = useState({
    'userId': '',
    'id': '',
    'title': '',
    'completed': ''
  });
  //=====================================================
  const { userId, id, title, completed } = inputs;
  //=====================================================
  const onChange = (e) => {
    const { name, value } = e.target;
    console.log('name', name)
    console.log('value', value)
    setInputs({
      ...inputs, [name]: value
    });
  }
  //=====================================================
  useEffect(() => {
    console.log(inputs);
  }, [inputs]);
  //=====================================================
  const divChange = (e) => {
    const menuName = e.target.name;
    switch (menuName) {
      case 'home':
        setHomeDiv(prev => prev = true);
        setProfileDiv(prev => prev = false);
        setContactDiv(prev => prev = false);
        setUpdateDiv(prev => prev = false);
        break;
      case 'profile':
        setHomeDiv(prev => prev = false);
        setProfileDiv(prev => prev = true);
        setContactDiv(prev => prev = false);
        setUpdateDiv(prev => prev = false);
        break;
      default:
        setHomeDiv(prev => prev = false);
        setProfileDiv(prev => prev = false);
        setContactDiv(prev => prev = true);
        setUpdateDiv(prev => prev = false);
        break;
    }
  }
  //=====================================================
  const deleteUser = (userId) => {
    const confirmId = window.confirm('삭제하시겠습니까?');
    confirmId && setDatas(datas.filter(user => user.id !== userId));
  }
  //=====================================================
  const updateUser = (obj) => {
    setInputs({
      ...inputs,
      'userId': obj.userId,
      'id': obj.id,
      'title': obj.title,
      'completed': obj.completed
    });
    setUpdateDiv(prev => !prev);
    setNameChange('UPDATE');
  }
  //=====================================================
  const insertUser = () => {
      setInputs({
      ...inputs,
      'userId': userId,
      'id': datas.length +1,
      'title': title,
      'completed': completed
    });
    
    
    setUpdateDiv(prev => !prev);
    setNameChange('INSERT');
  }

  //=====================================================
  const cancleCol = () => {
    setUpdateDiv(prev => !prev);
  }
  //=====================================================
  const update = () => {
    const updateDatas = datas.map(data =>
      (data.id === id) ? { ...data, ...inputs } : data
    );
    setDatas([...updateDatas]);
    setUpdateDiv(prev => !prev);
  }
  //=====================================================
  return (
    <React.Fragment>
      <div className="container-fluid">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              id="home-tab"
              className="nav-link active"
              name="home"
              data-bs-toggle="tab"
              data-bs-target="#home-tab-pane"
              type="button"
              role="tab"
              aria-controls="home-tab-pane"
              aria-selected="true"
              onClick={divChange}
            >Home</button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              id="profile-tab"
              className="nav-link"
              name="profile"
              data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane"
              type="button"
              role="tab"
              aria-controls="profile-tab-pane"
              aria-selected="false"
              onClick={divChange}
            >Profile</button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              id="contact-tab"
              className="nav-link"
              name="contact"
              data-bs-toggle="tab"
              data-bs-target="#contact-tab-pane"
              type="button"
              role="tab"
              aria-controls="contact-tab-pane"
              aria-selected="false"
              onClick={divChange}
            >Contact</button>
          </li>
        </ul>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <table className="table table-hover">
              <thead>
                <tr>
                  {
                    (homeDiv) && (
                      Object.keys(datas[0]).map((keys) => (
                        <th key={keys}>{keys}</th>
                      ))
                    )
                  }
                  <td>
                    <button
                      className="btn btn-outline-dark m-1"
                      onClick={() => insertUser()}
                    >INSERT</button>
                  </td>
                </tr>
              </thead>
              <tbody>
                {
                  (homeDiv) && (
                    datas.map((datas) => {
                      let background = '';
                      switch (datas.completed) {
                        case true:
                          background = '#5bbbfb';
                          break;
                        case false:
                          background = '#ff8d8d';
                          break;
                        default:
                          background = '#ffffff';
                      }
                      return (
                        <tr key={datas.id}>
                          <td>{datas.userId}</td>
                          <td>{datas.id}</td>
                          <td>{datas.title}</td>
                          <td style={{ background }}>
                            {
                              (datas.completed === false) ? 'false' : 'true'
                            }
                          </td>
                          <td>
                            <button
                              className="btn btn-outline-dark m-1"
                              onClick={() => updateUser(datas)}
                            >UPDATE</button>
                            <button
                              className="btn btn-outline-dark"
                              onClick={() => deleteUser(datas.id)}
                            >DELETE</button>
                          </td>
                        </tr>
                      )
                    })
                  )}
              </tbody>
            </table>
          </div>
          {
            (updateDiv) && (
              <div className="crud-div col-4 m-2">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">{nameChange}</h3>
                    <div className="card-text">
                      <input
                        name="id"
                        type="number"
                        value={id}
                        readOnly
                      />
                      <input
                        name="userId"
                        type="number"
                        placeholder="userId"
                        value={userId}
                        onChange={onChange}
                      />
                      <input
                        name="title"
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={onChange}
                      />
                      <select
                        name="completed"
                        onChange={onChange}
                      >
                        {
                          completed ? (
                            <>
                              <option value={completed}>TRUE</option>
                              <option value={!completed}>FALSE</option>
                            </>
                          ) : (
                            <>
                              <option value={completed}>FALSE</option>
                              <option value={!completed}>TRUE</option>
                            </>
                          )
                        }
                      </select>
                      <div className="mt-3">
                        <button
                          className="btn btn-outline-dark"
                          onClick={update}
                        >확인</button>
                        <button
                          className="btn btn-outline-dark"
                          onClick={cancleCol}
                        >취소</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </React.Fragment>
  )
}
//=======================================================
export default Main;
