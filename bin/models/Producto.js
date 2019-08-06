const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductoSchema = new Schema({
        name: String,
        marca: String,
        precio: String,
        Descripcion: String,
        funcionalidad: String,
        id_Post: Object,




});

var Producto = mongoose.model("Producto", ProductoSchema);
module.exports = Producto;
