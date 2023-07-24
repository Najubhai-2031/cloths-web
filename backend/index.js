const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
db();

app.use(express.json());
app.use(cors());

app.use('/auth', require('./routes/auth'));

app.listen(3000, () => {
  console.log(`Server running on ${3000}`)
});