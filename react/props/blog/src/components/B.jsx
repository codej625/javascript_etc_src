import react from 'react';
import C from './C';

const B = (props) => {
    return (
        <>
            <p>
                <span style={{ color: 'blue' }}>저는 B에요</span><br />
                이녀석은 App에서 받았어요{`=> `}{props.name}
            </p>
            <C name={props.name} />
        </>
    )
};

export default B;