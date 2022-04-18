import React, { memo } from "react";

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();
  const formRef = React.createRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
    //this.inputRef.current.value = '';
  };
  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <input type="text" ref={inputRef}></input>
      <button>Add</button>
    </form>
  );
});

export default HabitAddForm;

/*
import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    inputRef = React.createRef();
    formRef = React.createRef();
    onSubmit = e => {
        e.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
        //this.inputRef.current.value = '';
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} ref={this.formRef}>
                <input type="text" ref={this.inputRef}></input>
                <button>Add</button>
            </form>
        );
    }
}

export default HabitAddForm;
*/
