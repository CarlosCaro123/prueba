const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
        name: String,
        contenido: String,
        fecha: String,
        id_User: Object,
        id_Producto: Object,

    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
Producto_id: [
    {
        type: Schema.Types.ObjectId,
        ref: "Producto"
}
]

});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
