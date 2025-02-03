'use client'
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
// import Header from '../components/Header';
const SignUp = () => {
    const [user, setUser] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((PrevUser) =>({ ...PrevUser,[name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/auth/signup', user);
        } catch (e) {
            console.log(e.message);
        }
    };
  return (
    <div className="register-container">
      <h1 className="register-title">CaféTalk - Inscription</h1>
      <div className="register-content">
          <form onSubmit={handleSubmit} className="register-form">
              <label htmlFor="prenom" className="register-label">Prénom :</label>
              <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Entrez votre prénom"
                  name="prenom"
                  className="register-input"
                   
              />
              <label htmlFor="avatar" className="register-label">Avatar :</label>
              <input
                  type="file"
                  onChange={handleChange}
                  name="avatar"
                  className="register-input"
              />
              <label htmlFor="email" className="register-label">Email :</label>
              <input
                  type="email"
                  onChange={handleChange}
                  placeholder="Entrez votre email"
                  name="email"
                  className="register-input"
                   
              />
              <label htmlFor="password" className="register-label">Mot de passe :</label>
              <input
                  type="password"
                  onChange={handleChange}
                  placeholder="Votre mot de passe"
                  name="password"
                  className="register-input"
                   
              />
              <button type="submit" className="register-button">Rejoindre le café</button>
          </form>
      </div>
  </div>
  )
}

export default SignUp