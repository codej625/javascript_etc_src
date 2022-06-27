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

const App = () => {
  const [todos, setTodos] = useState(false);
  const [spacing, setSpacing] = React.useState(2);

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
                <TableCell colSpan={2}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                todos.map(todo => (
                  <TableRow key={todo.id}>
                    <TableCell>{todo.id}</TableCell>
                    <TableCell>{todo.userId}</TableCell>
                    <TableCell>{todo.title}</TableCell>
                    <TableCell align='center'><input type="checkbox" onChange={() => console.log(123)} /></TableCell>
                    <TableCell><Button size="small" variant="contained">EDIT</Button></TableCell>
                    <TableCell><Button size="small" variant="contained" onClick={() => deleteButton(todo.id)}>DELETE</Button></TableCell>
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

export default App;
