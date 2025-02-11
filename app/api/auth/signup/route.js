import { NextResponse } from "next/server";
import clientPromise from "@/libs/mongodb";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try {
        // ✅ Lire correctement le body avec `await`
        const body = await req.json();
        console.log("📥 Body reçu :", body);
        const { email, password, nickname } = body;

        // ✅ Vérifier si `body` contient bien les valeurs attendues
        if (!body.email || !body.password || !body.nickname) {
            return NextResponse.json(
                { error: "Tous les champs sont requis." },
                { status: 400 }
            );
        }

        // ✅ Hash du mot de passe
        const hashedPassword = await bcrypt.hash(body.password, 10);

        // ✅ Connexion à MongoDB
        const client = await clientPromise;
        const db = client.db();
        const usersCollection = db.collection("users");

        // 🔍 Vérifier si l'utilisateur existe déjà
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "Cet email est déjà utilisé." }, { status: 409 }); // 409 = Conflict
        }

        // ✅ Création de l'utilisateur
        const newUser = new User({
            email: body.email,
            password: hashedPassword,
            nickname: body.nickname
        });

        await newUser.save();

        return NextResponse.json(
            { message: "Inscription réussie", user: { email: newUser.email, nickname: newUser.nickname } },
            { status: 201 }
        );

    } catch (error) {
        console.error("❌ Erreur serveur :", error);
        return NextResponse.json(
            { error: "Erreur serveur" },
            { status: 500 }
        );
    };
};

function addUser(user) {
    try {
        return User.create({...user});
    } catch (error) {
        throw new Error(error.message);
    };
};