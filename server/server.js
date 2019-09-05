const express = require('express');
const cors = require('cors');
const app = express();
var mongoose = require('mongoose');
const TvShow = require('./models/TvShow');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not in the environmental variables. Try running 'source env.sh'");
}

mongoose.connection.on('connected', function() {
  console.log('Success: connected to MongoDb!');
});
mongoose.connection.on('error', function(err) {
  console.log('Error connecting to MongoDb: ' + err);
  process.exit(1);
});

mongoose.connect(process.env.MONGODB_URI);

app.use(cors());

app.listen(port, () => console.log('Listening on port ' + port))

app.get('/express_backend', (req, res) => {
    res.send({ express: 'backend is connected' });
  });

app.post('/create_show', (req, res) => {
  const newTvShow = new TvShow({
    Title: req.body.title,
    Passages: [[], [], []]
  });

  newTvShow.save(function(err) {
    if (err) {
      console.log("ERROR POSTING", err);
    }
  })
})

app.post('/create_quote', (req, res) => {

});