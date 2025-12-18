import express from "express"
import  postsRouter from "./routers/post.js"

const app = express();
const port = 3000;


app.get("/", (req, res) => {
    console.log("rotta /");
    res.send("test")
})



app.use("/posts", postsRouter)

app.listen(port, () => {
    console.log("Il server è in ascolto sulla porta " + port)
})