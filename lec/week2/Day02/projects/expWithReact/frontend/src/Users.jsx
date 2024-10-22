import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', age: '' });

  // Fetch all users on component load
  useEffect(() => {
    axios.get('http://localhost:3001/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const addUser = () => {
    axios.post('http://localhost:3001/users', newUser)
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error adding user:', error));
  };

  const updateUser = (id) => {
    axios.put(`http://localhost:3001/users/${id}`, { name: 'Updated User', age: 99 })
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error updating user:', error));
  };

  const deleteUser = (id) => {
    axios.delete(`http://localhost:3001/users/${id}`)
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error deleting user:', error));
  };

  return (
    <div>
      <h1>Users</h1>
      <input
        type="text"
        placeholder="Name"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Age"
        value={newUser.age}
        onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
      />
      <button onClick={addUser}>Add User</button>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} (Age: {user.age}) 
            <button onClick={() => updateUser(user.id)}>Update</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
