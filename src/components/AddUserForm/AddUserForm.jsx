import { Component } from 'react';

export class AddUserForm extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addUser({ ...this.state });
    // this.setState({
    //   name: '',
    //   email: '',
    // });
    this.props.closeForm();
  };

  render() {
    const { name, email } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
