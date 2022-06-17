const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/customers', require('./routes/route'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})