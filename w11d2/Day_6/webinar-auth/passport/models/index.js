const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(
  'mongodb://root:651it2018@ds257372.mlab.com:57372/passport651',
  { useNewUrlParser: true }
);
require('./user');
mongoose.connection.on('connected', () => {
  console.log(
    'Mongoose connection open mongodb+srv://admin:<1111>@cluster0-l74po.mongodb.net/test?retryWrites=true'
  );
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected app termination');
    process.exit(0);
  });
});
