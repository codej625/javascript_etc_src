import React, { useState } from 'react';
import TodoList from './TodoList';
import InputText from './InputText';
import InputButton from './InputButton';


const Content = () => {
 const[items, setItems] = useState(0);

  return (
    <React.Fragment>
      <InputText />
      <InputButton />
      <TodoList item={items}/>
    </React.Fragment>
  );
}

export default Content;
