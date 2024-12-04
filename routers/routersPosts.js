//Creo le rotte della risorsa ricette
const express = require("express");
const router = express.Router();
const postList = require("../data/posts");

// Index
router.get("/", (req, res) => {
    res.json(postList);
})

// Show
router.get("/:id", (req, res) => {
    const postId = req.params.id;
    res.json(postId);
})

// Create
router.post("/", (req, res) => {
    res.json(`Modifica dei dati del post numero`);
})

// Update
router.put("/", (req, res) => {
    res.json(`Modifca del curPosto del post numero`);
})

// Modify
router.patch("/:id", (req, res) => {
    const postId = req.params.id;
    res.json(`Modifica del curPosto del post numero ${postId}`);
})

// Destroy
router.delete("/:id", (req, res) => {
    const postId = req.params.id;
    res.json(`Cancellazione del post numero ${postId}`);
})

module.exports = router;