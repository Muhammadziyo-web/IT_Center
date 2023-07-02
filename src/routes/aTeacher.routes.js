const { Router } = require("express");
const { rate, getRate, updateRate, deleteRate, getRating } = require("../controllers/aTeacher.contr");
const route = Router();

route.post('/addRate',rate)
route.get('/userRate/:id',getRate)
route.put('/updateRate/:id',updateRate)
route.delete('/deleteRate/:id',deleteRate)

route.get('/getRating/:id', getRating)

module.exports = {route};  
