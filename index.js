const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("The server's ok!");
})

const cars = [];

app.get("/cars", (req, res) =>{
    console.log(req.method);
    res.status(200).send({cars: cars});
})

app.get("/cars/:id", (req, res) =>{
    console.log(req.method);
    const car = cars.find(car => car.id == req.params.id);
    res.status(200).send(car);
})

app.post("/cars" , (req, res) =>{
    console.log(req.method);
    cars.push(req.body);
    res.status(200).send(req.body);
})