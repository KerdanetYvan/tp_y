'use client'
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
// import Header from '../components/Header';
export default function SignUp ({ setSigningUp, setSigningIn }) {
    const [user, setUser] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((PrevUser) =>({ ...PrevUser,[name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('Création de l\'utilisateur', user);
            const response = await axios.post('../api/auth/signup', user, { headers: { 'Content-Type': 'application/json' } });
            console.log('Utilisateur créé', response);
        } catch (e) {
            console.log(e.message);
        }
    };

    const switchToSignIn = () => {
        setSigningUp(false);
        setSigningIn(true);
    };

    return (
        <div className="register-container">
            <h1 className="register-title">CaféTalk - Inscription</h1>
            <div className="register-content">
                <form onSubmit={handleSubmit} className="register-form">
                    <label htmlFor="prenom" className="register-label">Pseudo :</label>
                    <input
                        type="text"
                        onChange={handleChange}
                        placeholder="Entrez votre pseudo"
                        name="nickname"
                        className="register-input"
                        required
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
                        required
                    />
                    <label htmlFor="password" className="register-label">Mot de passe :</label>
                    <input
                        type="password"
                        onChange={handleChange}
                        placeholder="Votre mot de passe"
                        name="password"
                        className="register-input"
                        required
                    />
                    <button type="submit" className="register-button">Rejoindre le café</button>
                </form>
            </div>
            <button onClick={switchToSignIn} className="register-switch">Déjà inscrit ? Connectez-vous</button>
        </div>
    )
};