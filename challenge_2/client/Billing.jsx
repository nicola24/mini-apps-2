import React from 'react';
import axios from 'axios';

class Billing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCardNumber: undefined,
      expirationDate: undefined,
      cvv: undefined,
      billingZipCode: undefined,
    };
    this.handleChangeCardNumber = this.handleChangeCardNumber.bind(this);
    this.handleChangeExpiration = this.handleChangeExpiration.bind(this);
    this.handleChangeCvv = this.handleChangeCvv.bind(this);
    this.handleChangeBilling = this.handleChangeBilling.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeCardNumber(event) {
    this.setState({ creditCardNumber: event.target.value });
  }

  handleChangeExpiration(event) {
    this.setState({ expirationDate: event.target.value });
  }

  handleChangeCvv(event) {
    this.setState({ cvv: event.target.value });
  }

  handleChangeBilling(event) {
    this.setState({ billingZipCode: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      creditCardNumber: this.state.creditCardNumber,
      expirationDate: this.state.expirationDate,
      cvv: this.state.cvv,
      billingZipCode: this.state.billingZipCode,
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
          <input placeholder="Credit Card Number" value={this.state.creditCardNumber} onChange={this.handleChangeCardNumber} /><br />
          <input placeholder="Expiration Date" value={this.state.expirationDate} onChange={this.handleChangeExpiration} /><br />
          <input placeholder="CVV" value={this.state.city} onChange={this.cvv} /><br />
          <input placeholder="Billing Zip Code" value={this.state.billingZipCode} onChange={this.handleChangeBilling} /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}


export default Billing;
