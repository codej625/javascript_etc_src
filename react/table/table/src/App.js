import './App.css';
import React, { useEffect, useState } from 'react';
import jsonDatas from './data.json';
//=======================================================
const App = () => {
  const [datas, setDatas] = useState(false);
  const [homeDiv, setHomeDiv] = useState(false);

  useEffect(() => {
    setDatas(jsonDatas);
  });

  const home = () => {
    setHomeDiv(prev => !prev);
  }
  //=====================================================
  return (
    <React.Fragment>
      <div className="container-fluid">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button 
              className="nav-link active" 
              id="home-tab" 
              data-bs-toggle="tab" 
              data-bs-target="#home-tab-pane" 
              type="button" 
              role="tab" 
              aria-controls="home-tab-pane" 
              aria-selected="true"
              onClick={home}
            >Home</button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className="nav-link" 
              id="profile-tab" 
              data-bs-toggle="tab" 
              data-bs-target="#profile-tab-pane" 
              type="button" 
              role="tab" 
              aria-controls="profile-tab-pane" 
              aria-selected="false"
            >Profile</button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className="nav-link" 
              id="contact-tab" 
              data-bs-toggle="tab" 
              data-bs-target="#contact-tab-pane" 
              type="button" 
              role="tab" 
              aria-controls="contact-tab-pane" 
              aria-selected="false"
            >Contact</button>
          </li>
        </ul>
      </div>
      <div>
        <table>
          <thead>
            {
              homeDiv && (
                Object.keys(datas[0]).map((keys) => (
                  <th key={keys}>{keys}</th>
                ))
              )
            }
          </thead>
        </table>
      </div>
    </React.Fragment>
  )
}
//=======================================================
export default App;
