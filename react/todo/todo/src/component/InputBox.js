import React, { useRef, useState } from 'react';
import Button from '@mui/material/Button';
//===============================================================
const InputBox = ({ todoList, setTodoList }) => {

  const [text, setText] = useState('');
  const inputRef = useRef(null);
  
  // input 값 가져오기
  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  const onPressSubmitButton = (e) => {
    e.preventDefault();
    // todoItemList에 값 추가
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
      deleted: false,
    });
    setTodoList(nextTodoList);
    // input 값 초기화 및 포커싱
    setText('');
    // 엘리먼트의 접근 현재의 엘리먼트의 포커스를 맞춤
    inputRef.current.focus();
  };
  //=============================================================
  return (
    <form onSubmit={onPressSubmitButton} className="todoapp__inputbox">
      {/* 아이템 내용 입력 input */}
      <input
        type="text"
        name="todoItem"
        value={text}
        ref={inputRef}
        placeholder="할 일을 입력해주세요"
        className="todoapp__inputbox-inp"
        onChange={onChangeInput}
      />
      {/* 입력 후 아이템 추가 버튼 */}
      <Button variant="contained" type="submit">추가</Button>
    </form>
  );
};
//===============================================================
export default InputBox;
