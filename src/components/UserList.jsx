import { useGetUsersQuery } from "../features/api/apiSlice";

export default function UserList() {
  const { data: users, isLoading, error } = useGetUsersQuery();
  if (isLoading) return <h2>Loading... ⏳</h2>;
  if (error) return <h2>⚠️ ERROR: {error.message}</h2>;
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
