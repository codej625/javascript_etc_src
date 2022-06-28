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
import { Checkbox } from '@material-ui/core';

const App = () => {
  const [select, setSelect] = useState(false);
  const [todos, setTodos] = useState(false);
  const [addText, setAddText] = useState('ADD');
  const [spacing, setSpacing] = React.useState(2);
  const [inputs, setInputs] = useState({
    userId: '',
    id: '',
    title: '',
    completed: ''
  });

  useEffect(() => {
    setTodos(datas)
  }, []);

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
    setSelect(!select);
    setAddText('ADD')
    setInputs({
      userId: '',
      id: '',
      title: '',
      completed: ''
    })
  };

  const deleteButton = (test) => {
    if (window.confirm('삭제하시겠습니까?')) {
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
  };

  return (
    <Grid container spacing={spacing}>
      <Grid item xs={12}>
        {todos && (
          <form onSubmit={handleSubmit}>
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
                      userId={userId}
                      title={title}
                      completed={completed}
                      onChange={onChange}
                      onSubmit={handleSubmit}
                    />
                  </TableRow>
                )}
                {
                  todos.map(todo => (
                    <TableRow key={todo.id}>
                      <TableCell>{todo.id}</TableCell>
                      <TableCell>{todo.userId}</TableCell>
                      <TableCell>{todo.title}</TableCell>
                      <TableCell align="center" ><Checkbox /></TableCell>
                      <TableCell colSpan={2} align="right">
                        <Button size="small" variant="contained">EDIT</Button>
                        <Button size="small" variant="contained" color="secondary" onClick={() => deleteButton(todo.id)}>DELETE</Button>
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </form>
        )}
      </Grid>
    </Grid>
  );
}

const Item = ({ userId, id, title, completed, onChange }) => {
  return (
    <Fragment>
      <TableCell><input type="text" name="userId" value={userId} onChange={onChange} /></TableCell>
      <TableCell><input type="text" name="id" value={id} onChange={onChange} /></TableCell>
      <TableCell><input type="text" name="title" value={title} onChange={onChange} /></TableCell>
      <TableCell align="center"><Checkbox name="completed" value={completed} onChange={onChange} /></TableCell>
      <TableCell align="right"><Button size="small" variant="contained" color="primary" type="submit">CREATE</Button></TableCell>
    </Fragment>
  )
}

export default App;
