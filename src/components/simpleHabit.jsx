import React, { useState } from "react";

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = React.createRef();
  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <li>
      <span ref={spanRef}>Reading </span>
      <span>{count} </span>
      <button onClick={handleIncrement}>+</button>
    </li>
  );
};

export default SimpleHabit;
