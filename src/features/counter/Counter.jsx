import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
      <button onClick={() => dispatch(reset())}> reset </button>
    </>
  );
}

export default Counter;
