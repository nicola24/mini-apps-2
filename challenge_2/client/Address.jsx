import React from 'react';
import axios from 'axios';

class Address extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressOne: '',
      addressTwo: '',
      city: '',
      state: '',
      zipCode: undefined,
      phoneNumber: undefined,
    };
    this.handleChangeAddressOne = this.handleChangeAddressOne.bind(this);
    this.handleChangeAddressTwo = this.handleChangeAddressTwo.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeState = this.handleChangeState.bind(this);
    this.handleChangeZipcode = this.handleChangeZipcode.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeAddressOne(event) {
    this.setState({ addressOne: event.target.value });
  }

  handleChangeAddressTwo(event) {
    this.setState({ addressTwo: event.target.value });
  }

  handleChangeCity(event) {
    this.setState({ city: event.target.value });
  }

  handleChangeState(event) {
    this.setState({ state: event.target.value });
  }

  handleChangeZipcode(event) {
    this.setState({ zipCode: event.target.value });
  }

  handleChangePhoneNumber(event) {
    this.setState({ phoneNumber: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      addressOne: this.state.addressOne,
      addressTwo: this.state.addressTwo,
      city: this.state.city,
      state: this.state.state,
      zipCode: this.state.zipCode,
      phoneNumber: this.state.phoneNumber,
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
          <input placeholder="address One" value={this.state.addressOne} onChange={this.handleChangeAddressOne} /><br />
          <input placeholder="address Two" value={this.state.addressTwo} onChange={this.handleChangeAddressTwo} /><br />
          <input placeholder="City" value={this.state.city} onChange={this.handleChangeCity} /><br />
          <input placeholder="State" value={this.state.state} onChange={this.handleChangeState} /><br />
          <input placeholder="ZipCode" value={this.state.zipCode} onChange={this.handleChangeZipcode} /><br />
          <input placeholder="PhoneNumber" value={this.state.phoneNumber} onChange={this.handleChangePhoneNumber} /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Address;
