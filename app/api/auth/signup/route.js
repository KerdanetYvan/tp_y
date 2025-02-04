import connect from "@/libs/mongodb";

export async function POST(req) {
    try {
        // On commence par se connecter à la base de données
        await connect();

        // On récupère les données de la requête
        const body = await req.json();

        
    } catch (error) {
        console.error("Erreur lors de l'inscription :", error);
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    };
};