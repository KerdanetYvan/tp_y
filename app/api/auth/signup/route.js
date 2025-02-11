import { NextResponse } from "next/server";
import clientPromise from "@/libs/mongodb";
import mongoose from "mongoose";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        // On récupère les informations de l'utilisateur
        const { nickname, email, password, avatar } = await req.json();
        // console.log("👤 Utilisateur :", nickname, email, password, avatar); // Test de récupération de l'utilisateur

        // On se connecte à la base de données
        const client = await clientPromise;
        const db = client.db();
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // On vérifie si l'utilisateur existe déjà
        const user = await User.findOne({ email });
        // console.log("🔍 Utilisateur trouvé :", user); // Test pour savoir si l'utilisateur existe ou non
    } catch (error) {
        console.error("❌ Erreur serveur :", error);
    };
};