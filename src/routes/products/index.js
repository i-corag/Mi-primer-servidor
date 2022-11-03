const express = require('express');
const router = express.Router();
const path = require ("path");



/* ruta que envia un archivo html */
router.get ("/", (req,res) => {
    res.status(200).sendFile(path.join(__dirname,"../../views/html/products/list.html"));
})

router.get ("/1", (req,res) => {
    res.status(200).sendFile (path.join(__dirname,"../../views/html/products/detail.html"));
})

module.exports = router;