import React from 'react';
import './App.css';
import Content from './component/Content';
import Title from './component/Title';

const App = () => {
  return (
    <React.Fragment>
      <Title text="Todo List"/>
      <Content />
    </React.Fragment>
  );
}

export default App;
