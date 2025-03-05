const jwt = require('jsonwebtoken');
const refreshTokens = {}; // In-memory store for refresh tokens (use a database in production)
require('dotenv').config();
function generateTokens(user) {
    const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_KEY, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: user.id },process.env.JWT_KEY, { expiresIn: '7d' });

    // Store the refresh token in the database or in-memory store
    refreshTokens[refreshToken] = user.id;

    return { accessToken, refreshToken };
}

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token,process.env.JWT_KEY, (err, user) => {
        if (err) {
            if (err.name === 'TokenExpiredError') {
                return res.status(403).json({ message: 'Token expired', code: 'TOKEN_EXPIRED' });
            }
            return res.sendStatus(403);
        }
        req.user = user;
        next();
    });
}