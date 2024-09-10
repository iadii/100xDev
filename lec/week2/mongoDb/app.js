const mongoose = require('mongoose')
const uri = 'mongodb+srv://iadii:Aditya45@bookdb.ldlto.mongodb.net/?retryWrites=true&w=majority&appName=bookdb'
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('Connected to MongoDB Atlas');
  });
