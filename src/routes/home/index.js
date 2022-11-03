const express = require('express');
const router = express.Router();
const path = require ("path");



/* ruta que envia un archivo html */
router.get ("/", (req,res) => {
    res.sendFile (path.join(__dirname,"../../views/home.html"));
})

module.exports = router;



/* ruta que envia mensaje en texto plano 
app.get ("/home", (req,res) => {
    res.send ("Hola! Este es mi primer servidor!");
})
*/