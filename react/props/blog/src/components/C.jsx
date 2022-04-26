import react from 'react';

const C = (props) => {
    return (
        <>
            <p>
                <span style={{ color: 'green' }}>저는 C에요</span><br />
                이녀석은 App에서 받았어요{`=> `}{props.name}<br />
                <span style={{ color: 'brown' }}>값이 App에서 C까지 왔네요</span><br />
            </p>
        </>
    )
};

export default C;