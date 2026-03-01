import React from "react";
import { useSelector } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h2>Welcome to Redux-React App ⚛️💜</h2>
      <h3>Count: {count}</h3>
    </div>
  );
}
