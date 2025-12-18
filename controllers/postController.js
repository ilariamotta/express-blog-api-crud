import posts from "../data.js"

function index(req, res) {
    const tags = req.query.tags;

    let filteredVideogames = posts;
    if (tags !== undefined) {
        filteredVideogames = posts.filter((videogame) =>
            videogame.tags.includes(tags)
        )
    }

    const listaVideogiochi = {
        totale: filteredVideogames.length,
        risultati: filteredVideogames,

    }
    res.json(listaVideogiochi)
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const videogioco = posts.find(game => game.id === id)

    if (videogioco !== undefined) {
        res.json(videogioco)
    } else {
        res.status(404)
        res.json({
            error: "Not found",
            message: "Videogioco non in elenco"
        })
    }

}


function store(req, res) {
    console.log("creo nuovo gioco");
    res.send("Creo nuovo videogioco")
}

function update(req, res) {
    console.log("modifico videogioco")
    const id = req.params.id;
    res.send("Aggiorno videogioco " + id)
}

function modify(req, res) {
    console.log("aggiorno parzialmente videogioco")
    const id = req.params.id;
    res.send("Aggiorno parzialmente videogioco " + id)
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    const index = posts.findIndex((gioco) => gioco.id === id)
    if (index === -1) {
        res.status(404)
        res.json({
            error: "Not found",
            message: "Videogioco non trovato"
        })
    } else {
        posts.splice(index, 1)
    }
    res.sendStatus(204)
}

const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy,


}

export { controller }