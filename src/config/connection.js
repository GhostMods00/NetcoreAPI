const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;