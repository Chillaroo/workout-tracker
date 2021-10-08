const { connect, connection } = require('mongoose');

connect(  
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.wxoba.mongodb.net/workout?retryWrites=true&w=majority`,
  // process.env.MONGO_URI || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

module.exports = connection;
