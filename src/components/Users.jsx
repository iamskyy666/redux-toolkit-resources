import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/usersSlice";

export default function Users() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <h2>Loading... ⌛</h2>;
  if (error) return <h2>⚠️Error: {error}</h2>;
  return (
    <div>
      <h1>User List:</h1>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name} - {user.email} 📧</li>;
        })}
      </ul>
    </div>
  );
}
