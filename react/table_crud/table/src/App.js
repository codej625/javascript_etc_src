import './App.css';
import React, { Fragment, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
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
  const [toggle, setToggle] = useState(false);
  const [update, setUpdate] = useState(false);
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
    console.log(e.target.value)
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

  const updateButton = () => {
    setUpdate(!update)
    console.log('update-> ', update)
  };

  const clickCheck = () => {
    setToggle(!toggle)
  }

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
                      title={title}
                      todos={todos}
                      toggle={toggle}
                      completed={completed}
                      onChange={onChange}
                      clickCheck={clickCheck}
                      onSubmit={handleSubmit}
                    />
                  </TableRow>
                )}
                {
                  todos.map(todo => (
                    (!update) ? (
                      <TableRow key={todo.id}>
                        <TableCell>{todo.id}</TableCell>
                        <TableCell>{todo.userId}</TableCell>
                        <TableCell>{todo.title}</TableCell>
                        <TableCell align="center"><Checkbox checked={(todo.completed) ? true : false} /></TableCell>
                        <TableCell colSpan={2} align="right">
                          <Button size="small" variant="contained" onClick={updateButton}>EDIT</Button>
                          <Button size="small" variant="contained" color="secondary" onClick={() => deleteButton(todo.id)}>DELETE</Button>
                        </TableCell>
                      </TableRow>
                    ) : (
                      <TableRow key={todo.id}>
                        <TableCell>
                          <TextField
                            size="small" 
                            label="id" 
                            variant="outlined"
                            defaultValue={todo.id}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField 
                            size="small" 
                            label="userId" 
                            variant="outlined" 
                            defaultValue={todo.userId} 
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            size="small" 
                            label="title" 
                            variant="outlined" 
                            defaultValue={todo.title} 
                          />
                        </TableCell>
                        <TableCell align="center">
                          <Checkbox 
                            checked={(todo.completed) ? true : false} 
                          />
                        </TableCell>
                        <TableCell colSpan={2} align="right">
                          <Button 
                            size="small" 
                            variant="contained" 
                            onClick={updateButton}
                          >EDIT</Button>
                          <Button 
                            size="small" 
                            variant="contained" 
                            color="secondary" 
                            onClick={() => deleteButton(todo.id)}
                          >DELETE</Button>
                        </TableCell>
                      </TableRow>
                    )
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

const Item = ({ userId, id, title, onChange, clickCheck, toggle }) => {
  return (
    <Fragment>
      <TableCell><input type="text" name="userId" value={userId} onChange={onChange} className="readOnly" /></TableCell>
      <TableCell><input type="text" name="id" value={id} onChange={onChange} /></TableCell>
      <TableCell><input type="text" name="title" value={title} onChange={onChange} /></TableCell>
      <TableCell align="center"><Checkbox name="completed" value={toggle} onChange={onChange} onClick={clickCheck} /></TableCell>
      <TableCell align="right"><Button size="small" variant="contained" color="primary" type="submit">CREATE</Button></TableCell>
    </Fragment>
  )
}

export default App;
