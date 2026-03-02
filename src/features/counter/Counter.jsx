import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
    </>
  );
}

export default Counter;
