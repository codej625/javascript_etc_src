import './App.css';
import React, { Fragment, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import axios from 'axios';
import datas from './todos.json';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox } from '@material-ui/core';

const App = () => {
  const [select, setSelect] = useState(false);
  const [addText, setAddText] = useState('ADD');
  const [todos, setTodos] = useState(false);
  const [spacing, setSpacing] = React.useState(2);
  const [inputs, setInputs] = useState({
    'userId': '',
    'id': '',
    'title': '',
    'completed': false
  });

  const { id, title, completed } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  useEffect(() => {
    setTodos(datas)
  }, []);

  // useEffect(() => {
  //   getTodos();
  // }, []);

  // useEffect(() => {
  //   console.log(todos);
  // },[todos]);

  // const getTodos = () => {
  //   axios.get('https://jsonplaceholder.typicode.com/todos')
  //     .then(res => setTodos(res.data))
  //     .catch(err => console.log(err));
  // }

  const deleteButton = (test) => {
    if (window.confirm('삭제하시겠습니까?')) {
      alert('어림도없지')
      console.log(test)
      setTodos(todos.filter(item => item.id !== test));
    };
  };

  const addButton = () => {
    setSelect(!select)
    // (select) ? setAddText('ADD') : setAddText('CANCEL');
    if (select) {
      setAddText('ADD')
    } else {
      setAddText('CANCEL')
    }
    console.log('test')
  };


  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12}>
        {todos && (
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {
                  Object.keys(todos[0]).map((data, idx) => {
                    // const colSpan = data === 'completed' ? 2 : 1;
                    const align = (data === 'completed') ? 'center' : 'left';
                    return (
                      <TableCell key={idx} align={align}>{data}</TableCell>
                    )
                  })
                }
                <TableCell colSpan={2} align="right"><Button size="small" variant="contained" onClick={addButton}>{addText}</Button></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {select && (
                <TableRow>
                  <Item
                    id={id}
                    title={title}
                    completed={completed}
                    onChange={onChange}
                  />
                </TableRow>
              )}
              {
                todos.map(todo => (
                  <TableRow key={todo.id}>
                    <TableCell>{todo.id}</TableCell>
                    <TableCell>{todo.userId}</TableCell>
                    <TableCell>{todo.title}</TableCell>
                    <TableCell align="center" ><Checkbox onChange={() => console.log(123)} /></TableCell>
                    <TableCell colSpan={2} align="right">
                      <Button size="small" variant="contained">EDIT</Button>
                      <Button size="small" variant="contained" color="secondary" onClick={() => deleteButton(todo.id)}>DELETE</Button>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        )}
      </Grid>
    </Grid>
  );
}

const Item = () => {
  return (
    <Fragment>
      <TableCell></TableCell>
      <TableCell><input name="id" /></TableCell>
      <TableCell><input name="title" /></TableCell>
      <TableCell align="center"><Checkbox /></TableCell>
      <TableCell align="right"><Button size="small" variant="contained" color="primary">CREATE</Button></TableCell>
    </Fragment>
  )
}

export default App;
