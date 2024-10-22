const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/blog_platform', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('Database connection error:', err));


const authRoutes = require('./routes/auth');
const postRoutes = require('routes/posts.js');

app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
