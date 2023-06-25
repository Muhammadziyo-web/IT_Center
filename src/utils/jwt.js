const jwt = require("jsonwebtoken")

const Secret_key = process.env.JWT_SECRET_KEY;

const sign = (payload) => jwt.sign(payload, Secret_key, {expiresIn:"10d"})
const verify = (payload) => jwt.verify(payload, Secret_key)

module.exports = {
    sign,
    verify
}