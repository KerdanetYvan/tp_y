import React, { useContext } from 'react';
import { AuthContext } from '@/app/context/AuthContext';

export default function Header({ setComponent, isModalOpen }) {
    const { auth } = useContext(AuthContext);
    console.log("auth", auth);

    return (
        <ul>
            <li>
                <button onClick={() => setComponent("home")}>Accueil</button>
            </li>
            <li>
                <button onClick={() => setComponent("explore")}>Explorer</button>
            </li>
            <li>
                <button onClick={() => setComponent("message")}>Messagerie</button>
            </li>
            <li>
                <button onClick={() => isModalOpen(true)}>Poster un Coffs</button>
            </li>
            <li>
                <button onClick={() => setComponent("profile")}>
                    <img src={auth.avatar} alt="avatar" />
                    <h1>{auth.nickname}</h1>
                </button>
            </li>
        </ul>
    );
};
