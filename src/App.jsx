import "./App.css";
import Counter from "./features/counter/Counter";

export default function App() {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
        borderRadius: "5px",
      }}>
      <h2>Welcome to Redux-React App ⚛️💜</h2>
      <Counter />
    </div>
  );
}
