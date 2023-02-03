const jwt = require("jsonwebtoken");

function createJWT(foundUser) {
  const jwtToken = jwt.sign(
    {
      data: foundUser.id,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
  return jwtToken;
}
module.exports = { createJWT };
