import { UsersListItem } from './UsersListItem';

export function UsersList({ users, handleDelete, changeJobStatus }) {
  return (
    <ul>
      {users.map(({ id, name, email, hasJob }) => (
        <li key={id}>
          <UsersListItem
            id={id}
            name={name}
            email={email}
            hasJob={hasJob}
            handleDelete={handleDelete}
            changeJobStatus={changeJobStatus}
          />
        </li>
      ))}
    </ul>
  );
}
