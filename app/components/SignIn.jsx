/* Composant de connexion */
"use client";
import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '../context/AuthContext'

export default function SignIn({ setSigningIn, setSigningUp }) {
  const [user, setUser] = useState({})
  const { login } = useContext(AuthContext)

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser(PrevUser => ({ ...PrevUser, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    login(user)
    if (login) {
      console.log('Connexion réussie')
      console.log(user);
    }
  }

  const switchToSignUp = () => {
    setSigningIn(false);
    setSigningUp(true);
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Connexion</h2>
        <p className="subtitle">Connectez-vous pour savourer l'expérience</p>
        <form action="" onSubmit={handleSubmit}>
              <div className="input-box">
                <label>Email</label>
                <input 
                  type="email"
                  name="email"
                  placeholder="Entrez votre email" 
                  onChange={handleChange} 
                  className='register-input'
                  required 
                />
              </div>
              <div className="input-box">
                <label>Mot de passe</label>
                <input 
                  type="password" 
                  name='password'
                  placeholder="Entrez votre mot de passe" 
                  onChange={handleChange} 
                  className='register-input'
                  required 
                />
              </div>
              <div className="btn-container">
                <button className="btn">Se connecter</button>
              </div>
        </form>
      </div>
      <button onClick={switchToSignUp}>Pas encore de compte ? Inscrivez-vous</button>
    </div>
  )
}
