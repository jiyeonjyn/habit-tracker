import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";

class Habits extends Component {
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map(
            (habit) => (
              <Habit
                key={habit.id}
                habit={habit}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
              />
            ) // 바로 return되는 값이라 중괄호 안 씀
          )}
        </ul>
        <button onClick={this.props.onReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;
