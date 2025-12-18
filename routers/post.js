import express from "express";
import posts from "../data.js";

const router = express.Router();

//INDEX

router.get("/", (req, res) => {

    const listaVideogiochi = {
        totale: posts.length,
        risultati: posts,

    }
    res.json(listaVideogiochi)
})

//SHOW

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const videogioco = posts.find(game => game.id === id)
    res.json(videogioco)
})

// STORE

router.post("/", (req, res) => {
    console.log("creo nuovo gioco");
    res.send("Creo nuovo videogioco")
})

// UPDATE

router.put("/:id", (req, res) => {
    console.log("modifico videogioco")
    const id = req.params.id;
    res.send("Aggiorno videogioco " + id)
})

// MODIFY

router.patch("/:id", (req, res) => {
    console.log("aggiorno parzialmente videogioco")
    const id = req.params.id;
    res.send("Aggiorno parzialmente videogioco " + id)
})

// DESTROY

router.delete("/:id", (req, res) => {
    console.log("elimino videogioco")
    const id = req.params.id;
    res.send("Elimino videogioco " + id)
})

export default router