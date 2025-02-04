"use client";
import SignUp from '../components/SignUp'; // Composant d'inscription
import SignIn from '../components/SignIn'; // Composant de connexion
import style from './page.module.css';
import { DiCoffeescript } from "react-icons/di";
import React, { useState } from 'react';

export default function SignPage() {
  const [signingUp, setSigningUp] = useState(false);
  const [signingIn, setSigningIn] = useState(true);

  return (
    <div className={style.container}>
      <div className={style.containerIcon}>
        <DiCoffeescript size={500} />
      </div>
      <div className={style.containerForm}>
        {signingUp && <SignUp />}
        {signingIn && <SignIn />}
      </div>
    </div>
  )
}
