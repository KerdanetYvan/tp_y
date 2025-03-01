'use client';
import styles from "../page.module.css";
import axios from "axios";
import React, {useState, useContext} from 'react'
import { AuthContext } from "../context/AuthContext";
const Coff = () => {
    const { auth } = useContext(AuthContext);    
    const [coffs, setCoffs] = useState({
        user: '',
        coffs: '',
        img: '',
    });

    const handleChange = (e) => {
        // Destructuration pour extraire name, value et files de l'événement
        const { name, value, files } = e.target;

        if (name === "img" && files.length > 0) {
            const file = files[0];
            const reader = new FileReader();
            
            reader.onloadend = () => {
                setCoffs((prev) => ({ ...prev, image: reader.result }));
            };
            
            reader.readAsDataURL(file); // Convertit l’image en Base64
        } else if (name === "user") {
            setCoffs((prev) => ({ ...prev, user: auth.nickname }));
        } else {
            setCoffs((prev) => ({ ...prev, [name]: value }));
        }
        
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:3000/api/coff", coffs);

            if(response.status === 201){
                console.log('Coffs publié');
                console.log(response);
                
            }
        }catch(e){
            console.log(e.message);
        }
    };
    
  return (
    <div className={styles.containerCoffs}>
        <img src="https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp" alt="" className={styles.imgCoffs} />
        <form onSubmit={handleSubmit} className={styles.formCoffs}>
            <textarea name="coffs" id="" placeholder='Petite pause café ?!' width="400px" height="200px"  onChange={handleChange}></textarea>
            <div className={styles.divButton}>
                <div className={styles.fileDiv}>
                    <div className={styles.inputDiv}>
                        <input className={styles.input} name="img" type="file"  onChange={handleChange} />
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className={styles.icon}>
                            <polyline points="16 16 12 12 8 16"></polyline>
                            <line y2="21" x2="12" y1="12" x1="12"></line>
                            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                            <polyline points="16 16 12 12 8 16"></polyline>
                        </svg>
                    </div>
                </div>
                <button >Poster</button>
            </div>
        </form>
    </div>
  )
}

export default Coff
