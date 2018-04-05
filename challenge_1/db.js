const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/coin_database');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Connected to MongoDB'));

const coinSchema = mongoose.Schema({
  time_period_start: { type: String, required: true },
  time_period_end: { type: String, required: true },
  time_open: { type: String, required: true },
  time_close: { type: String, required: true },
  price_open: { type: Number, required: true },
  price_high: { type: Number, required: true },
  price_low: { type: Number, required: true },
  price_close: { type: Number, required: true },
  volume_traded: { type: Number, required: true },
  trades_count: { type: Number, required: true },
});

const CoinData = mongoose.model('coindata', coinSchema);

const retreiveData = (cb) => {
  CoinData.find().exec((err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

module.exports.retreiveData = retreiveData;
