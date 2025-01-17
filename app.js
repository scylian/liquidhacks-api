const express = require('express');
const app = express();

const Twitter = require('twitter-lite');

const user = new Twitter({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET
});


app.get('/blue', async (req, res) => {
  const response = await user.getBearerToken();
  const client = new Twitter({
    bearer_token: response.access_token
  });
  const results = await client.get('search/tweets', {
    q: "(@TeamLiquid) #TeamBlue"
  });

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'POST, GET, ');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  res.json(results);
});

app.get('/gold', async (req, res) => {
  const response = await user.getBearerToken();
  const client = new Twitter({
    bearer_token: response.access_token
  });
  const results = await client.get('search/tweets', {
    q: "(@TeamLiquid) #TeamGold"
  });

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'POST, GET, ');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  res.json(results);
});

app.get('/white', async (req, res) => {
  const response = await user.getBearerToken();
  const client = new Twitter({
    bearer_token: response.access_token
  });
  const results = await client.get('search/tweets', {
    q: "(@TeamLiquid) #TeamWhite"
  });

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'POST, GET, ');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  res.json(results);
});

const port = process.env.port || 3000;
app.listen(port, () =>{
  console.log('Server started');
});
