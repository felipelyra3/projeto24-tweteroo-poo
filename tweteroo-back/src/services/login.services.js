import loginRepository from "../repositories/login.repositories.js";

/* async function SignUpService(username, avatar) {
    try {
        await loginRepository.insertOneNewUser(username, avatar);
    } catch (error) {
        console.log(error);
    }
} */

class User {
    constructor(username, avatar) {
        this.username = username,
            this.avatar = avatar
    }

    async NewUser() {
        await loginRepository.insertOneNewUser(this.username, this.avatar);
    }
}

async function SignUpService(username, avatar) {
    await User.NewUser(username, avatar);
}

/* class SignUpService {
    async insertOneNewUser() {

    }
} */

const loginServices = {
    SignUpService,
}

export default loginServices;