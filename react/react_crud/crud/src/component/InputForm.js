import React, { Fragment, useState } from 'react';
import './../App.css';
import Input from './../component/Input';

const InputForm = ({ todos, setTodos, formName, setForm, setCol }) => {

  const [checkbox, setCheckbox] = useState(false);

  const [input, setInput] = useState({
    'id': '',
    'userId': '',
    'title': '',
    'completed': false
  });
  const { userId, title, completed } = input;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input, [name]: value
    });
  }

  const createForm = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, input
    ]);
    setInput({
      ...input,
      'id': '',
      'userId': '',
      'title': '',
      'completed': false
    });
    setCol('col-12');
    setForm(false);
  }

  return (
    <div className="col-4">
      <div className="container">
        <div className="card">
          <form onSubmit={createForm}>
            <table className="table">
              <thead>
                <tr style={{ textAlign: "center" }}>
                  <th colSpan={3}>{formName}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ID</td>
                  <td colSpan={2}>
                    <Input
                      name={"id"}
                      type="text"
                      value={todos.length + 1}
                      readOnly
                      onChange={onChangeInput}
                    />
                  </td>
                </tr>
                <tr>
                  <td>USER ID</td>
                  <td>
                    <Input
                      name={"userId"}
                      type="number"
                      value={userId}
                      onChange={onChangeInput}
                    />
                  </td>
                </tr>
                <tr>
                  <td>TITLE</td>
                  <td>
                    <Input
                      name={"title"}
                      type="text"
                      value={title}
                      onChange={onChangeInput}
                    />
                  </td>
                </tr>
                <tr>
                  <td>COMPLETED</td>
                  <td>
                    <Input
                      value={checkbox}
                      type="checkbox"
                      defaultChecked={false}
                      onClick={() => setCheckbox(prev => !prev)}
                    />
                  </td>
                </tr>
                <tr className="table-light">
                  <td colSpan={3} style={{ textAlign: "right" }}>
                    <Input
                      type="SUBMIT"
                      value="SUBMIT"
                      readOnly
                    ></Input>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  )
}
export default InputForm;