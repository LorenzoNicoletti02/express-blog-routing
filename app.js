const express = require("express");
const app = express();

// Importato il file Data.js che ci esporta un oggetto con al suo interno l'array delle ricette
const {arrayRicette} = require("./data");
const postRouter = require("./routers/posts");

// Rendo la cartella visibile e utilizzabile al pubblico
app.use(express.static("public"));
app.use("/posts", postRouter);

// Listen Serve per accendere il server e metterlo in ascolto per le chiamate API
app.listen(3000, () => {
    console.log("te sento");
})

// Creo una rotta 
app.get("/", (req, res) => {
    console.log("Nuovo Server del mio blog");
    res.send("<h1>Arrivo dal nuovo Server vuoto</h1>");
})

// Creo un'altra rotta /Bacheca
app.get("/Bacheca", (req, res) => {
    const objectReturn = {arrayRicette};
    res.json(objectReturn);
})