import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import "./LoginPage.css"

import "@fontsource/quicksand"; 


function LoginPage() {
  const { setIsLoggedIn } = useContext(AuthContext); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users"));
    const user = users ? users.find((user) => user.email === email && user.password === password) : null;

    if (user) {
      localStorage.setItem("isLoggedIn", "true"); 
      setIsLoggedIn(true); 
      navigate("/"); 
    } else {
      alert("Email xetaas"); 
    }
  };

  return (
    <div className="login-page-big-div">


    <div className="login-page">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <div>
          {/* <label htmlFor="email">Email:</label> */}
          <input placeholder="Email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          {/* <label htmlFor="password">Şifre:</label> */}
          <input  placeholder="Password" type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Log in</button>
      </form>
      <p className="login-par par-marg">Forgot your password?</p>
      <div className="register-link">
        <Link className="login-par" to="/register">No account? Sign up.</Link>
      </div>
    </div>


    </div>
  );
}

export default LoginPage;
