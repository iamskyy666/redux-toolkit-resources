import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";

export default function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
        borderRadius: "5px",
      }}>
      <h2>Welcome to Redux-React App ⚛️💜</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}> + </button>
      <button onClick={() => dispatch(decrement())}> - </button>
    </div>
  );
}
