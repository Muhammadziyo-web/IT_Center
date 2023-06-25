const { verify } = require("../utils/jwt");

const CheckRole = (role) => {
  return (req, res, next) => {
    const { user } = req;
    // console.log(user);

    if (role === "admin") {
      if (user.role === "admin") return next();
      else return res.status(403).json({ message: "Permission denied" });
    } else if (role === "bogbon") {
      if (user.role === "bogbon" || user.role === role) return next();
      else return res.status(403).json({ message: "Permission denied" });
    }else if (role === "nihol"){
      if (user.role === role) return next();
      else return res.status(403).json({ message: "Permission denied" });
    }else{
     return res.status(403).json({ message: "Permission denied" });
    }
  };
};
module.exports = {CheckRole};