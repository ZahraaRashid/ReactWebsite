import React, { useState } from 'react';
import './login.css';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Mocking a simple login logic (replace with your actual authentication logic)
    if (email === 'user@example.com' && password === 'password') {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Log In</h1>
      {isLoggedIn ? (
        <p>You are logged in.</p>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Log In</button>
        </form>
      )}
    </div>
  );
}

