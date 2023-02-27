import tweetRepository from "../repositories/tweet.repositories.js";

/* async function NewTweet(username, tweet) {
    try {
        const user = await tweetRepository.findUserByUsername(username);
        if (!user) {
            return res.status(400).send('Usuário não encontrado!');
        }

        await tweetRepository.insertOneNewTweet(username, tweet, user.avatar);
        return;
    } catch (error) {
        console.log(error);
    }
} */

class Tweets {
    constructor(username, tweet, avatar) {
        this.username = username;
        this.tweet = tweet;
        this.avatar = avatar;
    }

    async NewTweet() {
        await tweetRepository.insertOneNewTweet(this.username, this.tweet, this.avatar);
    }

    async GetTweetsByUsername() {
        const tweets = await tweetRepository.findTweetsByUsername(this.username);
        return tweets;
    }
}

const tweetService = {
    Tweets,
}

export default tweetService;