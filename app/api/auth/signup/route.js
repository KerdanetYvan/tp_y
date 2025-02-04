import clientPromise from "@/libs/mongodb";

export async function POST(req) {
    try {
        const body = await req.json();
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        
        const client = await clientPromise;
        const db = client.db("CoffeeX");
        
        // Vérification de l'existence de l'utilisateur
        const existingUser = await db.collection("users").findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "Cet email est déjà utilisé" }, { status: 400 });
        };

        const result = await db.collection("users").insertOne({
            ...body,
            password: hashedPassword,
            createAt: new Date()
        });

        return NextResponse.json({ message: "Inscription réussie", user: newUser }, { status: 200 });
    } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    };
};