

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("xeta!");
      return;
    }

    const newUser = { email, password };
    const users = JSON.parse(localStorage.getItem("users")) || [];
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    navigate("/login"); 
  };

  return (
    <div className="login-page-big-div"> 
      <div className="login-page"> 
        <h1 className="login-header">Register</h1> 
        
        <form onSubmit={handleSubmit} className="login-form"> 
          <div className="login-input-div"> 
            <input 
              placeholder="Email" 
              type="email" 
              id="email" 
              className="login-input" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="login-input-div"> 
            <input 
              placeholder="Password" 
              type="password" 
              id="password" 
              className="login-input" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <div className="login-input-div"> 
            <input 
              placeholder="Confirm Password" 
              type="password" 
              id="confirmPassword" 
              className="login-input" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="login-button">Register</button> 
        </form>
        
        
        <div className="register-link"> 
          <p className="par-marg2"><Link className="login-par " to="/login">Already have an account? Click Here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
