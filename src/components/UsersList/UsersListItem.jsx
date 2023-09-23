export function UsersListItem(id, name, email, hasJob, handleDelete) {
  return (
    <>
      <p>Name:{name}</p>
      <p>Email:{email}</p>
      <p>Has Job:{hasJob ? 'Yes' : 'No'}</p>
      <button type="button" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </>
  );
}
