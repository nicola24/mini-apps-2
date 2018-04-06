import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Account from './Account';
import Address from './Address';
import Billing from './Billing';

const Button = () => (
  <div>
    <h2>Checkout</h2>
  </div>
);

const Checkout = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Button</Link></li>
        <li><Link to="/account">Account</Link></li>
        <li><Link to="/address">Address</Link></li>
        <li><Link to="/billing">Billing</Link></li>
      </ul>

      <Route exact path="/" component={Button} />
      <Route path="/account" component={Account} />
      <Route path="/address" component={Address} />
      <Route path="/billing" component={Billing} />
    </div>
  </BrowserRouter>
);

export default Checkout;
