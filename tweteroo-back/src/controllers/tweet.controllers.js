import tweetService from "../services/tweet.services.js";

async function NewTweet(req, res) {
    try {
        await tweetService.NewTweet(res.locals.username, res.locals.tweet);
        res.sendStatus(201);
    } catch (error) {
        res.send(error);
    }
}

async function GetTweetsByUsername(req, res) {
    try {
        const tweets = await tweetService.Tweets.GetTweetsByUsername(req.locals.username);
        res.send(tweets);
    } catch (error) {
        res.send(error);
    }
}

export { NewTweet, GetTweetsByUsername };