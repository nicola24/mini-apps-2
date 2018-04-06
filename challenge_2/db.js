const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/checkout');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connection to mongodb successful!'));

const CheckoutSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  addressOne: String,
  addressTwo: String,
  city: String,
  state: String,
  zipCode: Number,
  phoneNumber: Number,
  creditCardNumber: Number,
  expirationDate: Number,
  cvv: Number,
  billingZipCode: Number,
});

const Checkout = mongoose.model('Checkout', CheckoutSchema);

const insertCheckout = (obj, cb) => {
  Checkout.create(obj, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data)
      console.log('Data inserted =>', data);
    }
  });
};

module.exports.insertCheckout = insertCheckout;
