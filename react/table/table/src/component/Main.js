import './../App.css';
import React, { useEffect, useState } from 'react';
import json from './../data.json';
//=======================================================
const Main = () => {
  const [datas, setDatas] = useState(json);
  const [homeDiv, setHomeDiv] = useState(true);
  const [profileDiv, setProfileDiv] = useState(false);
  const [contactDiv, setContactDivDiv] = useState(false);
  //=====================================================
  useEffect(() => {
  });
  //=====================================================
  const divChange = (e) => {
    const divName = e.target.name;
    switch (divName) {
      case 'home'   : setHomeDiv(prev => prev = true);
                      setProfileDiv(prev => prev = false);
                      setContactDivDiv(prev => prev = false);
                      break;
      case 'profile': setHomeDiv(prev => prev = false);
                      setProfileDiv(prev => prev = true);
                      setContactDivDiv(prev => prev = false);
                      break;
      default       : setHomeDiv(prev => prev = false);
                      setProfileDiv(prev => prev = false);
                      setContactDivDiv(prev => prev = true);
                      break;
    }
  }
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
            name='contact'
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
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            {
              homeDiv && (
                Object.keys(datas[0]).map((keys) => (
                  <th key={keys}>{keys}</th>
                ))
              )
            }
          </tr>
        </thead>
        <tbody>
          {
            homeDiv && (
              datas.map((key, idx) => {
                let background = "";
                switch (key.Status) {
                  case null:
                    background = 'red';
                    break;
                  case true:
                    background = 'white';
                    break;
                  default:
                    background = 'blue';
                }
                return (
                  <tr key={idx}>
                    <td>{key.일자}</td>
                    <td>{key.캠페인}</td>
                    <td>{key.광고매체}</td>
                    <td>{key.광고목표}</td>
                    <td>{key.타겟팅}</td>
                    <td>{key.광고소재}</td>
                    <td>{key.노출수}</td>
                    <td>{key.클릭수}</td>
                    <td>{key.CTR}</td>
                    <td>{key.CPC}</td>
                    <td>{key.CPM}</td>
                    <td>{key.총비용}</td>
                    <td>{key.DB}</td>
                    <td>{key.전환율}</td>
                    <td>{key.CPA}</td>
                    <td>{key.Score}</td>
                    <td style={{ background, minWidth: 30 }}>
                      {
                        (key.Status == null) ? "null" : "true"
                      }
                    </td>
                    <td style={{ background, minWidth: 30 }}>
                      {
                        (key.소재보기 == null) ? "null" : "true"
                      }
                    </td>
                  </tr>
                )
              })
            )}
        </tbody>
      </table>
    </div>
  </React.Fragment>
)
}
//=======================================================
export default Main;
