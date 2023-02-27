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

async function TweetValidation(req, res, next) {
    const { tweet, username } = req.body;

    if (!username || !tweet) {
        res.status(400).send('Todos os campos são obrigatórios!');
        return;
    }

    res.locals.tweet = tweet;
    res.locals.username = username;
    next();
}

async function UsernameAsParamsValidation(req, res, next) {
    const { username } = req.params;

    if (!username) {
        res.status(400).send('Todos os campos são obrigatórios!');
        return;
    }

    res.locals.username = username;
    next();
}

export { UsernameAvatarValidation, TweetValidation, UsernameAsParamsValidation };