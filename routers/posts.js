//Creo le rotte della risorsa ricette
const express = require("express");
const router = express.Router();

//Importo i dati (oggetto) dal file data.js
const ricetteList = require("../data");

// Index
router.get("/", (req, res) => {
    res.json(ricetteList);
})

// Show
router.get("/:id", (req, res) => {
    const postId = req.params.id;
    res.json("Ecco l'Id num: " + postId);
})

// Create
router.post("/", (req, res) => {
    res.json("Creo l'elemento");
})





module.exports = router;