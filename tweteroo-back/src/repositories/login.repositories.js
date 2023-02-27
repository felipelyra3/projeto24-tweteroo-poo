import db from "../database/db.js";

async function insertOneNewUser(username, avatar) {
    await db.collection('users').insertOne({ username, avatar });
}

const loginRepository = {
    insertOneNewUser,
}

export default loginRepository;