import React, { useState } from 'react';

const InputSample = () => {
    const [text, setText] = useState('');

    // 이벤트에 등록하는 함수에서는 이벤트 객체 e 를 파라미터로 받아와서 사용 할 수 있는데, 
    // 이 객체의 e.target 은 이벤트가 발생한 DOM 인 input DOM 을 가르키게됩니다. 
    // 이 DOM 의 value 값, 즉 e.target.value 를 조회하면 현재 input 에 입력한 값이 무엇인지 알 수 있습니다.
    const onChange = (e) => {
        setText(e.target.value);
    }
    // Setter에 ''을 대입하여 값을 초기화
    const onReset = () => {
        setText('');
    };

    return (
        <div>
            <input onChange={onChange} value={text} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text}</b>
            </div>
        </div>
    );
}

export default InputSample;