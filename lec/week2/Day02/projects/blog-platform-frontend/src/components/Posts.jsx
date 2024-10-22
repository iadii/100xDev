import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/posts', {
        headers: { 'x-auth-token': token },
      });
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:5000/posts/${id}`, {
      headers: { 'x-auth-token': token },
    });
    setPosts(posts.filter(post => post._id !== id));
  };

  return (
    <div>
      <h2>Your Posts</h2>
      <Link to="/create">Create a new post</Link>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => deletePost(post._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
