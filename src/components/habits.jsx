import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  /*
  componentDidUpdate() {
    컴포넌트가 업데이트 될 때 마다 호출 
    render 함수가 호출될 때마다 componentDidUpdate호출 됨
    -> 조금 무거운 일을 수행해야 한다면 예상하지 못한 깜빡임이나 불필요한 일들이 수행될 수 있음
    => 성능에 좋지 않다
  }
  */
  
  handleIncrement = habit => {
    this.props.onIncrement(habit);
  };

  handleDecrement = habit => {
    this.props.onDecrement(habit);
  };

  handleDelete = habit => {
    this.props.onDelete(habit);
  };

  handleAdd = name => {
    this.props.onAdd(name);
  };

  render() {
    console.log('habits');
    return (
      <div className="habits">
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map(habit => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          Reset All
        </button>
      </div>
    );
  }
}

export default Habits;
