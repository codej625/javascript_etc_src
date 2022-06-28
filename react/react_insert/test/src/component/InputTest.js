import './../App.css';
import React, { Fragment, useEffect, useState } from 'react';
//===========================================================================\
// 배열을 return 해주는 함수
const callBack = () => {
  const jsonFile = [
    { '이진우': 'codej625' },
    { '김원찬': 'wonchan' },
    { '이경건': 'nuclear' },
    { '이상범': 'sking' },
    { '김평범': 'normal' }
  ];
  return jsonFile
}
//===========================================================================
const InputTest = () => {
  //===========================================================================
  // useState를 콜백함수로 받으면 매번 랜더링이 일어나지 않는다.
  const [datas, setDatas] = useState(() => {
    return callBack();
  });
  //===========================================================================
  // 객체가 기본값이 useState
  const [input, setInput] = useState('');
  //===========================================================================
  // 값이 바뀔때마다 state값을 저장하는 함수
  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input, [name]: value
    })
  };
  //===========================================================================
  // form을 submit 하고 input값을 저장하는 함수
  const submit = (e) => {
    setDatas(prev => {
      return (
        [...prev, input]
      )
    })
  }
  //===========================================================================
  // datas의 상태가 변하면 값을 확인하는 useEffect
  useEffect(() => {
    // 처음 랜더링시 한번 작동
    console.log(datas)
    // 의존성 배열속에 state를 넣어두면 state의 상태변화시에만 작동
  }, [datas])
  //===========================================================================
  return (
    <Fragment>
      input_01<input type="text" name="이진우" onChange={onChange} /><br />
      input_02<input type="text" name="nickName" onChange={onChange} /><br />
      input_03<input type="text" name="height" onChange={onChange} /><br />
      input_04<input type="text" name="weight" onChange={onChange} /><br />
      <button type='onSubmit' onClick={submit}>onSubmit</button>
    </Fragment>
  )
}
export default InputTest;