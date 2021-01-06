const express = require('express');
const app = express();
const parser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors'); // <-- allows only requests from resources we know/trust

app.use(cors()) // use "cross origin resource sharing"
app.use(parser.json()) 

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    console.log(err);
  }

  const db = client.db('games_hub');
  const gamesCollection = db.collection('games');
  const gamesRouter = createRouter(gamesCollection)  // <-- handles CRUD actions
  app.use('/api/games', gamesRouter);

  app.listen(5000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
})
