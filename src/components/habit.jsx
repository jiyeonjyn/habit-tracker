import React, { PureComponent } from "react";

class Habit extends PureComponent {
  handleIncrement = (habit) => {
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = (habit) => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;
    return (
      <li>
        <span>{name} </span>
        <span>{count} </span>
        <button onClick={this.handleIncrement}>+</button>&nbsp;
        <button onClick={this.handleDecrement}>-</button>&nbsp;
        <button onClick={this.handleDelete}>삭제</button>
      </li>
    );
  }
}

export default Habit;
