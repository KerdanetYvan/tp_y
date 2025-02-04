import connect from "@/libs/mongodb";
import User from "@/models/user.model";

export async function POST(req) {
    try {
        // On commence par se connecter à la base de données
        await connect();

        // On récupère les données de la requête
        const body = await req.json();

        const userCreated = await addUser(body);

        return Response.json({
            user: userCreated,
            status: 201
        });
    } catch (error) {
        return console.log(error.message);
    };
};

function addUser(user) {
    try {
        return User.create({...user});
    } catch (error) {
        throw new Error(error.message);
    };
};