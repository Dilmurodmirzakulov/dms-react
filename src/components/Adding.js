import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../store/slices/counterSlice";

const Adding = ({ setCount }) => {
  const counterValue = useSelector((state) => state.counter);
  const dispatchs = useDispatch();
  console.log("counterValue: " + counterValue.value);
  return (
    <div>
      <p>{counterValue.value}</p>
      <button onClick={() => dispatchs(increment())}>add</button>
      <button onClick={() => dispatchs(decrement())}>decrement</button>
      <input
        type="text"
        onChange={(e) => dispatchs(incrementByAmount(e.target.value))}
      />
    </div>
  );
};

export default Adding;
