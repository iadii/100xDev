const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.json());

const users = [
  {username: 'Amm', password: '12345'},
  {username: 'Adii', password: 'iaditya45'},
  {username: 'IsM', password: 'Gautam'},
  {username: 'adii@rspl', password: 'Dev@rspl'}
];

const authenticate = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  
  const user = users.find(user => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username and password' });
  }

  
  next();
};

app.post('/Signup', (req, res) => {
    const { username, password } = req.body;  

    users.push({ username: username, password: password });

    
    res.json({ message: 'User added successfully', users });
});



app.get('/', (req, res) => {
  res.send('Welcome to the public API!');
});

// Protected route - requires authentication
// protected because middleware is helping to protect it
app.post('/login', authenticate, (req, res) => {
  res.json({ message: `Welcome ${req.body.username}!` });
});

// Catch-all for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
