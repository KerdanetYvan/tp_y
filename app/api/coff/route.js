import { NextResponse } from "next/server";
import clientPromise from "@/libs/mongodb";

export async function GET(id) {
    const client = await clientPromise;
    const db = client.db("CoffeeX");
    const coff = await db.collection("coffs").findOne({ _id: id });
    return NextResponse.json(coff);
};

export async function POST(req) {
    try {
        const client = await clientPromise;
        const db = client.db("CoffeeX");
        const body = req.json();

        const result = await db.collection("coffs").insertOne(body);
    } catch (error) {

    };
};