import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const header = req.header('Authorization');

  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token, access denied' });
  }

  const token = header.split(' ')[1]; // ✅ Remove "Bearer"

  try {
    const verified = jwt.verify(token, 'secret123');
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};

export default auth;

