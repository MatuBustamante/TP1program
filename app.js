const { request } = require('express')
const express = require('express'); // Exportamos express
const dbconnect = require('./config');
const ModelUser = require('./userModel');
const app = express(); // Lo declaramos en APP


router.post("/", async (req,res) => {
    const body = req.body;
    const respuesta = await ModelUser.create(body);
    res.send(respuesta)
})

router.get("/", async (req,res) => {
    const respuesta = await ModelUser.find({})
    res.send(respuesta)
})



router.get("/:id", async (req,res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.findOne({})
    res.send(respuesta)
})


router.put("/:id", async (req,res) => {
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelUser.findOneAndUpdate({_id:id}, body)
    res.send(respuesta)
})


router.delete("/:id", async (req,res) => {
    const id = req.params.id;
    const respuesta = await ModelUser.deleteOne({_id:id})
    res.send(respuesta)
})










const router = express.Router();
router.get("/", (req,res) => {
    res.send("Soy un Metodo GET")
})

app.use(express.json());
app.use(router);
app.listen(3000, () => {
    console.log("el servidor esta en el puerto 3001");
})

dbconnect();