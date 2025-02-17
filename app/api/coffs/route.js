import { NextResponse } from "next/server";
import connect from "@/libs/mongodb";

export async function GET() {
    connect();
    const db = client.db("CoffeeX");
    const coffs = await db.collection("coffs").find().toArray();
    return NextResponse.json(coffs);
}