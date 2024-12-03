const express = require("express");
const app = express();

// Importato il file Data.js che ci esporta un oggetto con al suo interno l'array delle ricette
const {arrayRicette} = require("./data");

// Rendo la cartella visibile e utilizzabile al pubblico
app.use(express.static("public"));

// Listen Serve per accendere il server e metterlo in ascolto per le chiamate API
app.listen(3001, () => {
    console.log("te sento");
})

// Creo una rotta 
app.get("/", (req, res) => {
    console.log("Nuovo Server del mio blog");
    res.send("<h1>Arrivo dal nuovo Server</h1>");
})

// Creo un'altra rotta 
app.get("/Bacheca", (req, res) => {
    const objectReturn = {arrayRicette};
    response.json(objectReturn);
})