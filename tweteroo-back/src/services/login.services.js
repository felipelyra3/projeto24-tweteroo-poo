import loginRepository from "../repositories/login.repositories.js";

async function SignUpService(username, avatar) {
    try {
        await loginRepository.insertOneNewUser(username, avatar);
    } catch (error) {
        console.log(error);
    }
}

const loginServices = {
    SignUpService,
}

export default loginServices;