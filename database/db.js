const mongoose = require("mongoose");

const connectToDb = ()=>{
    mongoose.connect(
        "mongodb+srv://root:renan2012nha@cluster0.jpg5bwn.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    ).then(()=> console.log("Mongo DB conectado!"))
     .catch((err)=> console.log(err));   
};


module.exports = connectToDb;