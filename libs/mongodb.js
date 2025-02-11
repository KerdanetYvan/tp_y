import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // 🔥 Mets ta variable d'environnement ici
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
    throw new Error("❌ La variable d'environnement MONGODB_URI n'est pas définie.");
};

if (process.env.NODE_ENV === "development") {
    // ✅ Évite de recréer plusieurs connexions en mode dev (Hot Reload Next.js)
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // ✅ En production, on crée une nouvelle connexion
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

export default clientPromise;