const express = require('express');
const cors = require('cors');
require('./config/connection');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const productRoutes = require('./routes/productRoutes');
app.use(productRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Listening at Port ${PORT}`);
});
