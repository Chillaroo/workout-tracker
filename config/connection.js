const { connect, connection } = require('mongoose');

connect(  
  process.env.MONGO_URI,
  // || 'mongodb://localhost/workout',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

module.exports = connection;
