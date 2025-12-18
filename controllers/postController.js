import posts from "../data.js"

function index(req, res) {
    const listaVideogiochi = {
        totale: posts.length,
        risultati: posts,

    }
    res.json(listaVideogiochi)
}

function show(req, res) {
const id = parseInt(req.params.id);
    const videogioco = posts.find(game => game.id === id)
    res.json(videogioco)
}


function store(req, res){
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
    console.log("elimino videogioco")
    const id = req.params.id;
    res.send("Elimino videogioco " + id)
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