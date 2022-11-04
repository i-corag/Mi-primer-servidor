const express = require('express');

const path = require ("path");

const router = express.Router();

const products = [
    {
        id:"1",
        titulo:"Feminismo Para Principiantes",
        autor: "Nuria Varela",
        imagen: "../../public/assets/libros/5.jpeg",
    },
    {
        id:"2",
        titulo:"El Chico de las Estrellas",
        autor: "Chris Pueyo",
        imagen:"../../public/assets/libros/2.jpeg",
    },
    {
        id:"3",
        titulo:"Ecologismo Real",
        autor: "J. M. Mulet",
        imagen:"../../public/assets/libros/3.jpeg",
    },
    {
        id:"4",
        titulo:"Puta Madre",
        autor: "Dalia F. Walker",
        imagen: "../../public/assets/libros/4.jpeg",
    },
    {
        id:"5",
        titulo:"Los hombres me explican cosas",
        autor: "Rebecca Solnit",
        imagen:"../../public/assets/libros/5.jpeg",
    },
];

/* ruta que envia un archivo html */
router.get ("/", (req,res) => {
    return res.status(200).render("vistas/list.ejs", {products});
});

router.get ("/:id", (req,res) => {
    const {id} = req.params;

    const product = products.find ((products) => products.id === id);

    return res.status(200).render("vistas/detail.ejs" , {product});
});

module.exports = router;