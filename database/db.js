const mongoose = require("mongoose");

const connectToDb = ()=>{
    mongoose.connect(
        "mongodb+srv://renanppcosta:renan2012nha@cluster0.ypljb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(()=> console.log("Mongo DB conectado!"))
     .catch((err)=> console.log(err));   
};


module.exports = connectToDb;