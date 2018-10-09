const restaurants = require('./restaurants/restaurants.service.js');
const orders = require('./orders/orders.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(restaurants);
  app.configure(orders);
};
