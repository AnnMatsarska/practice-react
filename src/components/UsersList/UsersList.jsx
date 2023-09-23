import { UsersListItem } from './UsersListItem';

export function UsersList({ users, handleDlete }) {
  return (
    <ul>
      {users.map(({ id, name, email, hasJob }) => (
        <li key={id}>
          <UsersListItem
            id={id}
            name={name}
            email={email}
            hasJob={hasJob}
            handleDlete={handleDlete}
          />
        </li>
      ))}
    </ul>
  );
}
