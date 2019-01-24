const express = require ('express');
const massive = require ('massive');
const bodyParser = require ('body-parser');
require('dotenv').config()
const app = express();
const products_ctrl = require ('./products_controller');

massive(process.env.CONNECTION_STRING).then((dbInstance) => app.set('db', dbInstance)).catch((err) => console.log('error', err))

app.get(`/api/products`, products_ctrl.getAll)
app.get(`/api/porduct/:id`, products_ctrl.getOne)
app.put(`/api/products/:id`, products_ctrl.update)
app.post(`/api/products`, products_ctrl.create)
app.delete(`/api/products`, products_ctrl.delete)


port = process.env.port;
app.listen(console.log(`Someone is eaves dropping on port ${port}`))