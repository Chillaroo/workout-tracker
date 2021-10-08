const { connect, connection } = require('mongoose');

connect(  
  `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.wxoba.mongodb.net/workout?retryWrites=true&w=majority`,
  // process.env.MONGO_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

module.exports = connection;
