"use client";
import { createContext, useState } from 'react';
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
     // Etat pour suivre l'authentification
    const [isLoading, setIsLoading] = useState(false);
    // Etat pour stocker les infos de l'user connecté
    const [auth, setAuth] = useState(null);


    const login = async (dataForm) => {
        setIsLoading(true);
        try {
            const response = await axios.post("api/auth/signin", dataForm);
            if( !response.data.error ){
                localStorage.setItem('auth', JSON.stringify(response.data));
                setAuth(response.data);

                setIsLoading(false);
            }
        }catch(e){
            console.log(e.message);
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoading, auth, login }}>
            {children}
        </AuthContext.Provider>
    );
}