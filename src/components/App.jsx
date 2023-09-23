import { userData } from 'data/users';
import { Component } from 'react';
import { Button } from './Button/Button';
import { UsersList } from './UsersList/UsersList';
import { AddUserForm } from './AddUserForm/AddUserForm';

export class App extends Component {
  state = {
    users: userData,
    isListShown: false,
    isFormShown: false,
  };

  showList = () => {
    this.setState({
      isListShown: true,
    });
  };

  deletUser = idUser => {
    this.setState(prevState => ({
      users: prevState.users.filter(({ id }) => idUser !== id),
    }));
  };

  showForm = () => {
    this.setState({
      isFormShown: true,
    });
  };

  closeForm = () => {
    this.setState({
      isFormShown: false,
    });
  };

  addUser = data => {
    const newUser = {
      ...data,
      hasJob: false,
      id: Date.now(),
    };
    this.setState(prevState => {
      return {
        users: [...prevState.users, newUser],
      };
    });
  };

  changeJobStatus = userId => {
    this.setState(prevState => ({
      users: prevState.users.map(user => {
        if (userId === user.id) {
          return { ...user, hasJob: !user.hasJob };
        }
        return user;
      }),
    }));
  };

  render() {
    const { users, isListShown, isFormShown } = this.state;
    return (
      <>
        {isListShown ? (
          <>
            <UsersList
              users={users}
              handleDelete={this.deletUser}
              changeJobStatus={this.changeJobStatus}
            />
            {!isFormShown ? (
              <Button text="Add user" clickHandle={this.showForm} />
            ) : (
              <AddUserForm addUser={this.addUser} closeForm={this.closeForm} />
            )}
          </>
        ) : (
          <Button text="Show list of users" clickHandle={this.showList} />
        )}
      </>
    );
  }
}
