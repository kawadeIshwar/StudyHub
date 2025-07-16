import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const header = req.header('Authorization');

  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token, access denied' });
  }

  // Extract token part from header (removes "Bearer ")
  const token = header.split(' ')[1];

  try {
    // Verify token using secret key, returns decoded data if valid
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};

export default auth;
// This middleware checks for a valid JWT token in the Authorization header
// If valid, it attaches the decoded user data to req.user and calls next()
// If not valid, it sends a 400 response with an error message
// It uses the 'jsonwebtoken' library to verify the token
