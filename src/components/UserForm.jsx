import { useDispatch, useSelector } from "react-redux";
import { addUser, updateEmail, updateName } from "../features/user/userSlice";

export default function UserForm() {
  const dispatch = useDispatch();
  const { name, email, status } = useSelector((state) => state.user);

  function handleFormSubmit(evt) {
    evt.preventDefault();
    dispatch(addUser({ name, email }));
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        required
        value={name}
        onChange={(evt) => dispatch(updateName(evt.target.value))}
      />
      <br />
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(evt) => dispatch(updateEmail(evt.target.value))}
      />
      <br />
      <br />
      <button type="submit">
       Login
      </button>
      {status === "loading" && <h2>Submitting... ⌛</h2>}
      {status === "succeeded" && <h2>User logged-in successfully ✅</h2>}
      {status === "failed" && <h2>Error while logging-in ⚠️</h2>}
    </form>
  );
}
