import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => (
  <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <div className='text'>
        <h1>This is Home page</h1>
      </div>
  </>
);

export default Home;