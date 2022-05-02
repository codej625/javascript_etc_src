import React from 'react';

// 내부의 내용이 보여지게 하기 위해서는 
// Wrapper 에서 props.children 을 렌더링해주어야 합니다.
const Wrapper = ({ children }) => {
    const style = {
        border: '2px solid black',
        padding: '16px',
    };

    return (
        <div style={style}>
            {/* props.children을 랜더링 */}
            {children}
        </div>
    );
}
export default Wrapper;