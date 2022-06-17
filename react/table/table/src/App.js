import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import datas from './data.json';

const App = () => {
  const [tableHead, setTableHead] = useState([]);
  const [editIdx, setEditIdx] = useState(9999);
  const [chageData, setChangeData] = useState("");
  
  useEffect(() => {
    console.log('한번');
  }, []);

  useEffect(() => {
    console.log('여러번');
  });

  useEffect(() => {
    console.log(`changeData 변경 : ${chageData}`);
  }, [chageData]);  

  const getTargetData = (data) => {
    console.log('data', data);
  }

  const editData = (idx) => {
    console.log(idx);
    setEditIdx(idx);
  }

  return (
    <table>
      <thead>
        <tr>
        {Object.keys(datas[0]).map((key,idx) => (
          <td key={idx}>{key}</td>          
        ))}
        <td>수정하기</td>
        </tr>
      </thead>
      <tbody>
        {/*datas.map(data => (
          <tr>
            <td>{data.일자}</td>
            <td>{data.캠페인}</td>
            <td>{data.광고매체}</td>
            <td>{data.광고목표}</td>
            <td>{data.타겟팅}</td>
            <td>{data.광고소재}</td>
            <td>{data.노출수}</td>
            <td>{data.클릭수}</td>
            <td>{data.CTR}</td>
            <td>{data.CPC}</td>
            <td>{data.CPM}</td>
            <td>{data.총비용}</td>
            <td>{data.DB}</td>
            <td>{data.전환율}</td>
            <td>{data.CPA}</td>
            <td>{data.Score}</td>
            <td>{data.Status}</td>
            <td>{data.소재보기}</td>
          </tr>
        ))*/}
        {datas.map((data, idx) => {
          let background = "";
          switch(data.Score){
            case 50:
              background = 'red';
              break;
            case 0:
              background =  'white';
              break;
            default:
              background = 'blue';
          }
          return (
            <tr>
              <td>
                {(idx===editIdx)?(
                  <input type="text" value={chageData} onChange={(e) => setChangeData(e.target.value)} />
                ):(
                  <span>
                    {data.일자}
                  </span>
                )}
              </td>
              <td>{data.캠페인}</td>
              <td>{data.광고매체}</td>
              <td>{data.광고목표}</td>
              <td>{data.타겟팅}</td>
              <td>{data.광고소재}</td>
              <td>{data.노출수}</td>
              <td>{data.클릭수}</td>
              <td>{data.CTR}</td>
              <td>{data.CPC}</td>
              <td>{data.CPM}</td>
              <td>{data.총비용}</td>
              <td>{data.DB}</td>
              <td>{data.전환율}</td>
              <td>{data.CPA}</td>
              <td>{data.Score}</td>
              <td style={{background, minWidth: 30}}>{data.Status}</td>
              <td><button onClick={() => getTargetData(data.광고소재)}>자세히보기</button></td>
              <td><button onClick={() => editData(idx)}>수정하기</button></td>
            </tr>
          )
        })}        
      </tbody>
    </table>
  )
}
export default App;
