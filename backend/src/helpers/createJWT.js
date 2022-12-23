const jwt = require("jsonwebtoken");

function createJWT(foundUser) {
  const jwtToken = jwt.sign(
    {
      data: foundUser.id,
    },
    process.env.SECRET_KEY,
    { expiresIn: 60 }
  );
  return jwtToken;
}
module.exports = { createJWT };
