const jwt = require("jsonwebtoken");
const config = require("./config");

let checkToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) {
    return res.json({
      status: "false",
      msg: "Token not provided",
    });
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7);

    jwt.verify(token, config.key, (err, decoded) => {
      if (err) {
        return res.json({
          status: "false",
          msg: "Invalid token",
        });
      } else {
        req.decoded = decoded;

        console.log(decoded);
        next();
      }
    });
  } else {
    return res.json({
      status: "false",
      msg: "Invalid token format ",
    });
  }
};

module.exports = {
  checkToken: checkToken,
};
