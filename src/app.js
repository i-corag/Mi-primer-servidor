

require ('dotenv').config();

const express = require('express');

const app = express();


const homeRoutes = require ("./routes/home");
const productsRoutes = require ("./routes/products");

app.use(express.static("src/views")); /* para que funcione css */

app.use( "/" , homeRoutes);
app.use( "/products" , productsRoutes);


app.listen (process.env.PORT , () => {
    console.log('Server listening on port ' + process.env.PORT)
});

module.exports = app;