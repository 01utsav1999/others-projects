const jwt = require('jsonwebtoken');
const secret_key = xyshhshsjs;

const authenticate = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Assuming the token is in the "Bearer Token" format

    if (!token) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Verify the token
    const decodedToken = jwt.verify(token, secret_key); // Replace with your actual secret key

    req.userData = { userId: decodedToken.userId, username: decodedToken.username };
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Authentication failed' });
  }
};

module.exports = authenticate;
