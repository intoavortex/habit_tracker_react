import React, { memo } from 'react';

const HabitAddForm = memo(props => {
  /*
    state가 따로 없다면 function으로 작성해도 된다

    memo라는 함수 안에 우리의 function component를 전달하는 것이다 
    PureComponent처럼 props가 변경이 되지 않으면 안에 있는 함수가 호출되지 않는다
  */
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
