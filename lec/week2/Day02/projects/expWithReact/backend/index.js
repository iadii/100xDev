const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/users');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors()); // Allows frontend to connect

app.use('/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Express server!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
