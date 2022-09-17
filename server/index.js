const express = require("express");
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({message: "hello from server!"});
});

app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/hello/', (req, res) => {
  res.send({express: 'Hello from the server'})
})

app.post('/api/word', (req, res) => {
  console.log(req.body)
  res.send(
    `I received your POST request. This is what you send me: 
    ${req.body.post}`,
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
