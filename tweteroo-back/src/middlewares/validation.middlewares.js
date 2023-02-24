async function UsernameAvatarValidation(req, res, next) {
    const { username, avatar } = req.body;

    if (!username || !avatar) {
        res.status(400).send('Todos os campos são obrigatórios!');
        return;
    }

    res.locals.username = username;
    res.locals.avatar = avatar;
    next();
}

export { UsernameAvatarValidation };