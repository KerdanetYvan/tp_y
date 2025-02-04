import mongoose from "mongoose";

const connect = async () => {
    // On vérifie si on est déjà connecté
    if (mongoose.connections[0].readyState) {
        console.log("Déjà connecté à MongoDB");
        return;
    };

    try {
        // On essaie de se connecter
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'CoffeeX',
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connecté à MongoDB");
    } catch (error) {
        console.error("Problème de connexion:", error.message);
        throw new Error("Échec de connexion à la base de données");
    };
};

/**
* Système de cache pour éviter les connexions multiples
* Garde en mémoire l'état de la connexion globalement
*/
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
};

/**
* Fonction principale exportée qui gère la connexion MongoDB
* Implémente le pooling de connexions et le cache
* @returns {Promise} Connexion Mongoose
*/
export default async function connectDB() {
    // Retourne la connexion existante si disponible
    if (cached.conn) {
        return cached.conn;
    };

    // Initialise la connexion si aucune n'est en cours
    if (!cached.promise) {
        cached.promise = connect();
    };
    
    try {
        // Attend que la connexion soit établie
        cached.conn = await cached.promise;
        return cached.conn;
    } catch (e) {
        // Réinitialise la promesse en cas d'erreur pour réessayer
        cached.promise = null;
        throw e;
    };
};