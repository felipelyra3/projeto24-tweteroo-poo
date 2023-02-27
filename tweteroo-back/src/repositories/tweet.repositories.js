import db from "../database/db.js";

async function findUserByUsername(username) {
    const user = await db.collection('users').findOne({ username });
    return user;
}

async function insertOneNewTweet(username, tweet, avatar) {
    await db.collection('tweets').insertOne({ username, tweet, avatar });
}

async function findTweetsByUsername(username) {
    const tweets = await db.collection('tweets').find({ username });
    return tweets;
}

const tweetRepository = {
    findUserByUsername,
    insertOneNewTweet,
    findTweetsByUsername,
}

export default tweetRepository;