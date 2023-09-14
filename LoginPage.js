import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const buttonLogin = () => {
    if (user === "admin" && password === "zoro") {
      navigate("/dashboard");
    } else {
      alert("username dan password tidak sesuai");
    }
    console.log(user);
    console.log(password);
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label for="username">Username</label>
        <input
          type="text"
          id="username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>

      <div>
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={buttonLogin}>Login</button>
    </div>
  );
};
