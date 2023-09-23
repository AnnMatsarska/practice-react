import { userData } from 'data/users';
import { Component } from 'react';
import { Button } from './Button/Button';
import { UsersList } from './UsersList/UsersList';

export class App extends Component {
  state = {
    users: userData,
    isListShow: false,
  };

  showList = () => {
    this.setState({
      isListShow: true,
    });
  };

  deletUser = idUser => {
    this.setState(prevState => ({
      users: prevState.users.filter(({ id }) => idUser !== id),
    }));
  };

  render() {
    const { users, isListShow } = this.state;
    return (
      <>
        {isListShow ? (
          <UsersList users={users} handleDelete={this.deletUser} />
        ) : (
          <Button text="Show list of users" clickHandle={this.showList} />
        )}
      </>
    );
  }
}
