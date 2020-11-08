const express = require('express');
const app = express();

const Twitter = require('twitter-lite');

const user = new Twitter({
  consumer_key: "k0tRyQ4QRS1k3pU4Y9SO6EDY4",
  consumer_secret: "FSyq8bHtEAOMPMRx0BNr9FZk7KQGW9Gu1VvFMULRqqIthjZyOI"
});


app.get('/', async (req, res) => {
  const response = await user.getBearerToken();
  const client = new Twitter({
    bearer_token: response.access_token
  });
  const results = await client.get('search/tweets', {
    q: "#teamliquid #teamgold"
  });

  res.json(results);
  // res.send('Home Page');
});

const port = process.env.port || 3000;
app.listen(port, () =>{
  console.log('Server started');
});
