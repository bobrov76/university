const jwt = require("jsonwebtoken");
const config = require("../config/auth");

verifyToken = (req, res, next) => {

  let token=null;
  if(req.headers["x-access-token"]) token = req.headers["x-access-token"];
  else if(req.query.token) token = req.query.token;
  else if(req.body.token) token = req.body.token;

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

const authJwt = {
  verifyToken: verifyToken,
};

module.exports = authJwt;
