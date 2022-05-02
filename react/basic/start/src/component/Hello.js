import React from 'react';

// props 적용 ex01)
const Hello = ({ color, isSpecial, star, blackStar }) => {
    const brr = '<br />';

    // props 적용 ex02)
    // function Hello(props) {

    return (
        <>
            {/* 조건부 렌더링 결과_01 */}
            {blackStar ? <b>*</b> : null}

            {/* props 적용 ex01) */}
            <div style={{ color }}>

                {/* props 적용 ex02) */}
                {/* <div style={{color: props.color}}> */}
                <p>안녕하세요</p>
            </div>

            {/* 조건부 렌더링 결과_02 */}
            {star ? null : <b>☆</b>}

            {/* 조건부 렌더링 결과_03 */}
            {isSpecial ? <b>★</b> : null}
        </>
    );
}
export default Hello;