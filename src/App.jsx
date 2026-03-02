import "./App.css";
import CounterControl from "./components/CounterControl";
import CounterDisplay from "./components/CounterDisplay";

export default function App() {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
        borderRadius: "10px",
      }}>
      <h2>Welcome to Redux-React App ⚛️💜</h2>
      <CounterDisplay />
      <CounterControl />
    </div>
  );
}
