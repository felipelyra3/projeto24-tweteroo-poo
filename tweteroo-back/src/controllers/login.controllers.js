import loginServices from "../services/login.services.js";

async function SignUp(req, res) {
    try {
        await loginServices.SignUpService(res.locals.username, res.locals.avatar);
        res.sendStatus(201);
    } catch (error) {
        res.send(error);
    }
}

export { SignUp };