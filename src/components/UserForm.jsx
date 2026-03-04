// import { useDispatch, useSelector } from "react-redux";
// import { addUser, updateEmail, updateName } from "../features/user/userSlice";
import { useState } from "react";
import { useAddUserMutation } from "../features/api/apiSlice";

export default function UserForm() {
  // const dispatch = useDispatch();
  // const { name, email, status } = useSelector((state) => state.user);

  // function handleFormSubmit(evt) {
  //   evt.preventDefault();
  //   dispatch(addUser({ name, email }));
  // }

  const [formData, setFormData] = useState({ name: "", email: "" });
  const [addUser] = useAddUserMutation();

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    if (!formData.name || !formData.email) return;
    await addUser(formData);
    setFormData({ name: "", email: "" });
  };

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        required
        value={formData.name}
        onChange={handleChange}
        // value={name}
        // onChange={(evt) => dispatch(updateName(evt.target.value))}
      />
      <br />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        value={formData.email}
        onChange={handleChange}
        // value={email}
        // onChange={(evt) => dispatch(updateEmail(evt.target.value))}
      />
      <br />
      <br />
      <button type="submit">Login</button>
      {/* {status === "loading" && <h2>Submitting... ⌛</h2>}
      {status === "succeeded" && <h2>User logged-in successfully ✅</h2>}
      {status === "failed" && <h2>Error while logging-in ⚠️</h2>} */}
    </form>
  );
}
