import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/auth.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signup Submitted\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
    // logic 
    
  };

  return (  
    <div className="auth-container">
      <div className="auth-left" />
      <div className="auth-right">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h2 className="auth-heading">Create Account</h2>

          <label className="auth-label" htmlFor="name">Name</label>
          <input
            className="auth-input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="auth-label" htmlFor="email">Email</label>
          <input
            className="auth-input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="auth-label" htmlFor="password">Password</label>
          <input
            className="auth-input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="auth-label" htmlFor="role">Role</label>
          <select
          className="auth-input"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
>
  <option value="">Select role</option>
  <option value="user">User</option>
  <option value="admin">Admin</option>
</select>

          <button className="auth-button" type="submit">
            Sign Up
          </button>

          <p className="auth-bottom-text">
            Already have an account?{' '}
            <Link to="/user/login" className="auth-link">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
