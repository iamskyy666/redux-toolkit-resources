import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/auth/authSlice";

export default function AuthCtrl() {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  function handleLogin() {
    const userData = { name: "Skyy", email: "skyy@test.com" };
    dispatch(login(userData));
    console.log(`${userData.name} logged in with email: ${userData.email} ✅`);
  }
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome: {user.name}</h2>
          <p>Email: {user.email}</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={handleLogin}>Login 🔏</button>
          {console.log(`Logged out! ☑️`)}
        </>
      )}
    </div>
  );
}
