const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'Adii', age: 30 },
  { id: 2, name: 'Mishra', age: 25 },
];

router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const newUser = req.body;
  users.push({ ...newUser, id: users.length + 1 });
  res.json(users);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  users = users.map(user => user.id == id ? { ...user, ...updatedUser } : user);
  res.json(users);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  users = users.filter(user => user.id != id);
  res.json(users);
});

module.exports = router;
