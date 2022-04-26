import logo from './logo.svg';
import './App.css';
// 앞에는 사용할 이름, from은 경로
// A <- 변경 가능 (import시 이름은 대문자 사용)
import A from './components/A';

// App => arrow function 처리 가능
const App = () => {
  // 전역 변수
  const _var = 'test';

  return (
    // body 역할 (className="App"이 최상단에 위치해야 됨)
    <div className="App">
      <div className='container'>
        <h1>react</h1>
        <div>App에서 선언한 전역변수에요{`=> `}{_var}</div>
        <A name={'저는 C까지 갑니다.'} />
      </div>
    </div>
  );
}
export default App;
