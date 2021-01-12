const jwt = require('jsonwebtoken')
const SECRET_KEY = 'mySecret'

function generateToken (payload) {
  let token = jwt.sign(payload, SECRET_KEY)
  return token
}

async function verifyToken (token) {
  let verifiedToken = await jwt.verify(token, SECRET_KEY)
  return verifiedToken
}

module.exports = { generateToken, verifyToken }