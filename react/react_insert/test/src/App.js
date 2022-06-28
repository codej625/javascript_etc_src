import './App.css';
// import datas from './todos.json';
import React, { Fragment, useEffect, useState } from 'react';
import InputTest from './component/InputTest'

function App() {
  const [todos, setTodos] = useState(false);

  // useEffect(() => {
  //   setTodos(datas);
  // }, []);

  // useEffect(() => {
  //   console.log(todos)
  // }, [todos]);

  // useEffect(() => {
  //   console.log('userId-> ' + userId)
  //   console.log('id-> ' + id)
  //   console.log('title-> ' + title)
  //   console.log('completed-> ' + completed)
  // });

  const [inputs, setInputs] = useState({
    userId: '',
    id: '',
    title: '',
    completed: ''
  });

  const { userId, id, title, completed } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    
    setInputs({
      ...inputs, [name]: value
    });

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, inputs
    ]);
  };

  return (
    <Fragment>
      {/* <form onSubmit={handleSubmit}>
        Test01<input type="text" name="userId" value={userId} onChange={onChange} />
        Test02<input type="text" name="id" value={id} onChange={onChange} />
        Test03<input type="text" name="title" value={title} onChange={onChange} />
        Test04<input type="text" name="completed" value={completed} onChange={onChange} />
        <button type="submit">submit</button>
      </form> */}

      <InputTest />
    </Fragment>
  );
}

export default App;
