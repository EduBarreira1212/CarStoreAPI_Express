const express = require("express");
const DB = require("./DB");
const app = express();
const dbcontext = DB.carsDatabase();
app.use(express.json());

app.listen(3000, () => {
    console.log("The server's ok!");
})


app.get("/cars", async (req, res) => {
    console.log(req.method);
    res.status(200).send(await dbcontext.list());
})

app.get("/cars/:id", async (req, res) => {
    console.log(req.method);
    res.status(200).send(await dbcontext.get(req.params.id));
})

app.post("/cars" , async (req, res) => {
    console.log(req.method);
    res.status(200).send(await dbcontext.insert(req.body));
})

app.put("/cars/:id", async (req, res) => {
    console.log(req.method);
    res.status(200).send(await dbcontext.update(req.body, req.params.id));
})

app.delete("/cars/:id", async (req, res) => {
    console.log(req.method);
    await dbcontext.del(req.params.id)
    res.status(200).send("Sucess!!");
})