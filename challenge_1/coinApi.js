const https = require('https');

// HTTP Request
// GET /v1/quotes/{symbol_id}/history?time_start={time_start}&time_end={time_end}&limit={limit}
const symbolId = 'BITSTAMP_SPOT_BTC_USD';
const timeStart = '2016-01-01T00:00:00';
const timeEnd = '2016-01-03T00:00:00';
const limit = 2;

const request = `/v1/quotes/${symbolId}/history?time_start=${timeStart}&time_end=${timeEnd}&limit=${limit}`;

const options = {
  method: 'GET',
  hostname: 'https://rest.coinapi.io/',
  path: request,
  headers: { 'X-CoinAPI-Key': 'SECRET' },
};

const getDataFromCoinApi = (cb) => {
  https.request(options, (response) => {
    const chunks = [];
    response.on('data', (chunk) => {
      chunks.push(chunk);
    });
    cb(chunks);
  });
};

// requestCoinApi.end();

module.exports.getDataFromCoinApi = getDataFromCoinApi;
