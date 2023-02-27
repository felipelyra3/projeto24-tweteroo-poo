import express from 'express';
import { NewTweet, GetTweetsByUsername } from '../controllers/tweet.controllers.js';
import { TweetValidation, UsernameAsParamsValidation } from '../middlewares/validation.middlewares.js';

const router = express.Router();

router.post('/', TweetValidation, NewTweet)
    .get('/:username', UsernameAsParamsValidation, GetTweetsByUsername);

export default router;