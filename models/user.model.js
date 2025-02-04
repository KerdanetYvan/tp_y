import mongoose from "mongoose";

// On importe un plugin qui va nous aider à gérer les valeurs unique dans notre BDD
import uniqueValidator from "mongoose-unique-validator";

// Définition du Schéma : Comment nos users doivent être structurés
const userSchema = new mongoose.Schema({
    // Le pseudo de l'utilisateur
    nickname: {
        type: String,
        required: true,
        unique: true,
    },
    