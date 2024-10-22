const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET request to the users route');
});


router.post('/', (req, res) => {
  const newUser = req.body;
  res.send(`POST request to the users route, new user: ${JSON.stringify(newUser)}`);
});


router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  res.send(`PUT request to update user with id ${userId}, updated user: ${JSON.stringify(updatedUser)}`);
});


router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`DELETE request to delete user with id ${userId}`);
});

module.exports = router;
