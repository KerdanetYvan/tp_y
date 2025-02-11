import mongoose from "mongoose";

// On importe un plugin qui va nous aider à gérer les valeurs unique dans notre BDD
import uniqueValidator from "mongoose-unique-validator";

// Définition du Schéma : Comment nos users doivent être structurés
const coffsSchema = new mongoose.Schema({
    // Le pseudo de l'utilisateur
    user: {
        type: String,
        required: true,
    },
    // Le post de l'utilisateur
    coffs: {
        type: String,
        required: true,
    },
    // La photo du post
    image: {
        type: File,
        required: false,
    },
}, {
    // MongoDB va ajouter automatiquement la date de création et de modification
    timestamps: true,
});

coffsSchema.plugin(uniqueValidator);

const Coffs = mongoose.models.Coffs || mongoose.model("Coffs", coffsSchema);

export default Coffs;