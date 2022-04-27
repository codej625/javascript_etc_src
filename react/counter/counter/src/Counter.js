import React, { useState } from 'react';

const Counter = () => {

    // setNumber
    // useState를 사용 할 때에는 상태의 기본값을 파라미터로 넣어서 호출한다. 
    // useState 함수를 호출해주면 배열이 반환되고 여기서 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수이다.
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        setNumber(prevNumber => prevNumber + 1);
        // setNumber() <= prevNumber를 parameter로 받아서 prevNumber + 1을 retrun (내부적으로 처리)
        // ex)
        // setNumber = prevNumber => prevNumber + 1;
    }
    const onDecrease = () => {
        setNumber(prevNumber => prevNumber - 1);
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;