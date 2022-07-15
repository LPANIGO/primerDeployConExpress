import Manager from './manager/manager.js';
import express from 'express'

const manager = new Manager('src/files/productos.json');

const app = express();
const PORT = 8081;

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})



const environment = async() => {

    let arrrayProductos = await manager.getAll();

    app.get( '/productos', (req,res) => {
        res.send(arrrayProductos)
    })

    
    let randNum = Math.floor(Math.random()*arrrayProductos.length+1)
    let producto = await manager.getById(randNum);

    app.get( '/productoRandom', (req,res) => {
        res.send(`Producto random: ${producto}`);
    })
}

environment();