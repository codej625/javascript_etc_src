import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello.js';
import Wrapper from './component/Wrapper.js';
import Counter from './component/Counter.js';
import InputSample from './component/InputSample.js';
import InputSample02 from './component/InputSample02.js';
import InputSample03 from './component/InputSample03.js';
import UserList from './component/UserList.js';


const App = () => {
  const style = {
    // 중간에 - 문자열이 아닌 camelCase를 사용한다.
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,   // 기본 단윈 px
    padding: '1rem', // 다른 단위 사용 시 문자열로 설정
  }

  return (
    <Wrapper>
      <div>react_study</div>

      {/* 변수를 사용한 css 변경 */}
      <div style={style}>css_change</div>

      {/* css file을 이용한 css 변경 */}
      <div className="gray-box"></div>

      {/* import component props 전달 */}
      {/* props 이름만 작성시 기본값을 true로 설정한걸로 간주 */}
      <Hello color="red" blackStar="true" star={false} isSpecial />

      {/* 함수형 업데이트 */}
      <Counter />

      {/* input 상태 관리하기 */}
      <InputSample />

      <InputSample02 />

      <InputSample03 />
    
      <UserList />
      
    </Wrapper>

  );
}

export default App;
