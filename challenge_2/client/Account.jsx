import React from 'react';
import axios from 'axios';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
    this.handleChangeFirstname = this.handleChangeFirstname.bind(this);
    this.handleChangeLastname = this.handleChangeLastname.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeFirstname(event) {
    this.setState({ firstName: event.target.value });
  }

  handleChangeLastname(event) {
    this.setState({ lastName: event.target.value });
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }


  handleSubmit(event) {
    event.preventDefault();
    const user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    axios.post('/checkout', user)
      .then((res) => {
        console.log('Data sent to DB', res.data);
      });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="FirstName" value={this.state.firstName} onChange={this.handleChangeFirstname} /><br />
          <input placeholder="LastName" value={this.state.lastName} onChange={this.handleChangeLastname} /><br />
          <input placeholder="Email" value={this.state.email} onChange={this.handleChangeEmail} /><br />
          <input placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Account;
