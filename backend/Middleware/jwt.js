const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'TOKEN_SECRET');
    const userID = decodedToken.userId;

    if (req.body.userId && req.body.userId !== userID) {
      throw 'Invalid user ID';
    } else {
      next();
    }
  } catch(error) {
    res.sendStatus(401);
  }
};