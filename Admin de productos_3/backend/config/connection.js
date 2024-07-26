const mongoose = require('mongoose');

mongoose
  .connect("mongodb://127.0.0.1:27017/productos2_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB:", err);
  });
