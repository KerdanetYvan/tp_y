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
        await mongoose.connect(process.env.MONGODB_URI, {});

        // On vérifie si l'utilisateur existe déjà
        const user = await User.findOne({ email });
        // console.log("🔍 Utilisateur trouvé :", user); // Test pour savoir si l'utilisateur existe ou non
        // Si l'utilisateur existe déjà, on renvoie une erreur
        if (user) {
            return NextResponse.error(new Error("❌ Cet utilisateur existe déjà."));
        };

        // On crypte le mot de passe
        const hashedPwd = await bcrypt.hash(password, 10);

        // On crée un nouvel utilisateur
        const newUser = new User({
            nickname,
            email,
            password: hashedPwd,
            avatar,
        });
        // console.log("🔧 Utilisateur : ", newUser) // On vérifie la création de notre user

        // On sauvegarde l'utilisateur dans la base de données
        try {
            await newUser.save();
            console.log("✅ Utilisateur enregistré :", newUser);
        } catch(error) {
            console.error("❌ Erreur lors de la sauvegarde de l'utilisateur :", error);
        }

        return new NextResponse(
            JSON.stringify({ message: "Inscription réussie", user: { email: newUser.email, nickname: newUser.nickname } }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        );
        
    } catch (error) {
        console.error("❌ Erreur serveur :", error);
        return new NextResponse(
            JSON.stringify({ error: "Erreur serveur" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    };
};