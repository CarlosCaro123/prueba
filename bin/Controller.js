const mongoose = require("mongoose");
const User = require("./models/User");
const Producto = require("./models/Producto");
const Post = require("./models/Post");
class Controller{
    constructor(){
        this.connect();
    }

    async connect(){
        try{
            await mongoose.connect(
                "mongodb+srv://Admin:1192806943@cluster0-jv3bu.mongodb.net/MySuplementation?retryWrites=true&w=majority",
                 {useNewUrlParser:true}
            );
            console.log("conectados a la base de datos")

    } catch(e){
        console.error(e)
        }
    }

    getUsers(res){
        User.find({}, (err, users)=>{
            if(err) throw err;

            res.send( users );
    })
};

 getProductos(res){
        Producto.find({}, (err, Productos)=>{
            if(err) throw err;

            res.send( Productos );
    })
};

getPosts(res){
        Post.find({}, (err, Posts)=>{
            if(err) throw err;

            res.send( Posts );
    })

}

getUser(res, id) {
    User.find({_id: id}, (err, User) => {
        if (err) throw err;
        res.send(User);
    })
}

getpostsid(res, id) {
     Post.find({_id: id}, (err, posts) => {
        if (err) throw err;
        res.send(posts);
    })



}
}


exports.controller = new Controller()