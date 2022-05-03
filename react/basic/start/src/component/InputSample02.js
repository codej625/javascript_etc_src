import React, { useState } from 'react';

const InputSample = () => {
    // useState 함수 호출 배열을 반환
    // 첫번째 원소는 현재 상태, 두번째 원소는 Setter 함수
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const { name1, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        console.log(JSON.stringify("name-> " + name))
        console.log(JSON.stringify("value-> " + value))
        console.log({...inputs})
        console.log(name)
        console.log(value)

        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
            /*
                리액트 상태에서 객체를 수정할 때는 input[name] = value와 같이 직접 수정하면 안된다.
                대신 spread문법을 사용하여 ...inputs, 기존객체를 복사하여 새로운 객체를 만들고,
                이 새로운 객체에서 상태를 업데이트 [name]:value 해줘야 한다.
                여기서 [name]과 같이 대괄호를 사용하는 것은 변수로서 name이 들어올 수도 있고 nickname이 들어올 수도 있다.

                이렇게 기존 객체를 복사하여 새로운 객체에 업데이트 작업을 하는것을 "불변성을 지킨다"는 것이다.
                불변성을 지켜줘야만 리액트가 컴포넌트의 상태가 업데이트 됐음을 감지할 수 있고
                필요한 부분만을 리렌더링 할 수 있기 때문이다.
                기존 상태를 직접 수정하는 경우 리렌더링이 되지 않는다.
            */
        });
    };

    const onReset = () => {
        setInputs({
            name1: '',
            nickname: '',
        })
    };

    return (
        <div>
            <input name="test" placeholder="이름" onChange={onChange} value={name1} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name1} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;