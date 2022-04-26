import react, { useState } from 'react';
import B from './B';

const A = (props) => {

    return (
        <>
            <p>
                <span style={{ color: 'red' }}>저는 A에요</span><br />
                이녀석은 App에서 받았어요{`=> `}{props.name}
            </p>
            <B name={props.name} />
        </>
    )
};

export default A;