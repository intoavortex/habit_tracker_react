import React, { PureComponent } from 'react';
/*
  PureComponent는 props와 state의 안에 들어있는 데이터가 (최상위의 데이터가) 변하지 않으면 render 함수가 호출되지 않음 
  -> re-render 하지 않는다
  PureComponent는 shouldComponentUpdate()를 구현해놨다
  shouldComponentUpdate(): 컴포넌트를 업데이트 해야할지 안 해야할지 물어보는 함수다
  PureComponent는 prop과 state를 가볍게 비교한다 

  즉, 컴포넌트가 업데이트 되기 전에 리액트에서 물어보는 함수가 있는데 그냥 Component는 이 함수를 기본적으로 구현해놓지 않았고 
  퓨어 컴포넌트는 이 함수를 구현해놨음 이 함수의 구현사항은 이전의 prop이나 state를 지금 업데이트된 prop과 state와 비교한다

  shallow하게 비교한다는 것은 예를 들어 prop 안에 4가지의 데이터가 있고 전부 다 obj일 경우 그 안에 있는 이름이나 나이 등이 바뀌어도 동일한 obj라면 렌더가 호출되지 않는다는 것을 의미한다
*/
class HabitAddForm extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = event => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.formRef.current.reset();
  };

  render() {
    console.log('habitAddForm');
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
