import { NextResponse } from "next/server";
import clientPromise from "@/libs/mongodb";
import Coffs from "@/models/coffs.model";

export async function GET(id) {
    const client = await clientPromise;
    const db = client.db("CoffeeX");
    const coff = await db.collection("coffs").findOne({ _id: id });
    return NextResponse.json(coff);
};

export async function POST(req) {
    try {
        const body =await req.json();
        console.log("body reçu :", body);

        if(!body.coffs){
            return NextResponse.json(
                {error: "Tous les champs sont requis."},
                {status: 400}
            );
        }

        const client = await clientPromise;
        const db = client.db();
        const coffsCollection = db.collection("coffs");

        const newCoffs = new Coffs({
            user: localStorage.nickname,
            coffs: body.coffs,
            image: body.image || null,
        });

        await newCoffs.save();

        return NextResponse.json(
            {message: "Coffs publié", coffs: { user: newCoffs.nickname, coffs: newCoffs.coffs, image: newCoffs.image}},
            {status: 201}
        );
        
    } catch (error) {
        console.error("Erreur serveur :", error);
        return NextResponse.json(
            {error: "Erreur serveur"},
            {status: 500}
        );
    };
};