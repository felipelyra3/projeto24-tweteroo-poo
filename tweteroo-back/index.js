import chalk from 'chalk';
import cors from 'cors';
import express, { json } from 'express';
import SignUp from "./src/routes/login.routes.js";
import Tweets from "./src/routes/tweets.routes.js";

const app = express();

app.use(cors());
app.use(json());

const usuarios = [];
const tweets = [];

app.post('/sign-up', SignUp);

app.post('/tweets', Tweets);

app.get('/tweets/:username', (req, res) => {
  const { username } = req.params;

  const tweetsDoUsuario = tweets.filter(t => t.username === username);

  res.status(200).send(tweetsDoUsuario);
});

app.get('/tweets', (req, res) => {
  const { page } = req.query;

  if (page && page < 1) {
    res.status(400).send('Informe uma página válida!');
    return;
  }
  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;

  if (tweets.length <= 10) {
    return res.send(reverseTweets());
  }

  res.status(200).send([...tweets].reverse().slice(start, end));
});

function reverseTweets() {
  return [...tweets].reverse();
}

app.listen(5001, () => {
  console.log(chalk.bold.blue('Servidor funfando de boas!!!'));
});
