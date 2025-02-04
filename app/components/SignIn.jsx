/* Composant de connexion */
"use client";
import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '../context/AuthContext'

export default function SignIn() {
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
            <p className="register-link">Pas encore de compte ? <a href="/signup">Inscrivez-vous</a></p>
        </form>
      </div>
    </div>
  )
}
