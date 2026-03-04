import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  return (
    <div
      style={{
        border: "1px solid white",
        padding: "10px",
        borderRadius: "10px",
      }}>
      <h2>Welcome to Redux-React App ⚛️💜</h2>
      {/* <CounterDisplay />
      <CounterControl />
      <AuthCtrl />
      <Users /> */}
      <UserForm />
      <UserList />
    </div>
  );
}

//11
