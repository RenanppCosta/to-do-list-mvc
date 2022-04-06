const res = require("express/lib/response")

const getAll = (req, res)=>{
    res.render("index")
}


module.exports = {
    getAll,
}