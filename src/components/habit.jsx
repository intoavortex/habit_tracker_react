import React, { PureComponent } from 'react';

class Habit extends PureComponent {

  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
    // 컴포넌트가 UI상에서 등록이 되었을 때, 사용자에게 보여질 때
    // 컴포넌트가 마운트 되고 나서 데이터를 받아오거나 컴포넌트가 보여질 때 로딩스피너를 보여줘야 될 때 등 
  }
  
  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} unmount`);
    // UI상 지우기 전에 호출
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    console.log(`habit: ${name}`);
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
