const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nickname: String,
    password: String,
    picture: String,
    name1: String,
    name2: String,
    lastname1: String,
    lastname2: String,
    cellphone: String,
    id_Post: Object,

});

var User = mongoose.model("User", UserSchema);
module.exports = User;
