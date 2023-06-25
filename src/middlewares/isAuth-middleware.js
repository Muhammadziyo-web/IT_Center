const { verify } = require("../utils/jwt")
// const jwt =  require("jsonwebtoken")

const isAuth = async (req, res, next)=>{
try{
       const token = await (req.headers["authorization"]).split(' ')[1];

    //    console.log(token);

    if(!token) return res.status(401).json({message: "Permission denied"});
    
    const user = verify(token)
    req.user = user;
    
    next()

}catch(error){
    return res.status(401).json({message: "Permission denied"});
    // console.log(error.message);
}
}

module.exports = {isAuth,}