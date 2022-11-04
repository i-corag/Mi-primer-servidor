const express = require('express');

const path = require ("path");

const router = express.Router(); /* Inicializamos un enrutador*/

/* ruta*/
router.get ("/", (req,res) => {
    return res.status(200).render("vistas/home.ejs");
})

module.exports = router;



/* ruta que envia mensaje en texto plano 
app.get ("/home", (req,res) => {
    res.send ("Hola! Este es mi primer servidor!");
})
*/