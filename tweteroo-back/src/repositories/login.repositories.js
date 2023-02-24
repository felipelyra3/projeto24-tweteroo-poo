import db from "../database/db.js";

async function insertOneNewUser(username, avatar) {
    const user = await db.collection('users').insertOne({ username, avatar });
    return user;
}

const loginRepository = {
    insertOneNewUser,
}

export default loginRepository;