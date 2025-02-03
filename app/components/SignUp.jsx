'use client'
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
// import Header from '../components/Header';
const SignUp = () => {
    const [user, setUser] = useState({
        isActive: true,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((user) =>({ ...user,[name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/auth/signup', user);
        } catch (e) {
            console.log(e.message);
        }
    };
  return (
    <div>
        {/* <Header /> */}
        <h1>Register</h1>
        <div className='containerSign'>
            <form onSubmit={handleSubmit} className='sign'>
                <label htmlFor='prenom'>Prenom :</label>
                <input
                    type='text'
                    onChange={handleChange}
                    placeholder='prenom'
                    name='prenom'
                />
                <label htmlFor='avatar'>Avatar :</label>
                <input
                    type='file'
                    onChange={handleChange}
                    placeholder='URL picture'
                    name='avatar'
                />
                <label htmlFor='email'>Email :</label>
                <input
                    type='text'
                    onChange={handleChange}
                    placeholder='email'
                    name='email'
                />
                <label htmlFor='password'>Password :</label>
                <input
                    type='password'
                    onChange={handleChange}
                    name='password'
                />
                <button>S'inscrire</button>
                {/* <Link to='/sign' className='linkForm'>Déjà inscrit ?</Link> */}
            </form>
        </div>

    </div>
  )
}

export default SignUp