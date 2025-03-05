const jwt = require('jsonwebtoken');
require('dotenv').config();
const refreshTokens = {}; // In-memory store for refresh tokens (use a database in production)

function generateTokens(user) {
    const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_KEY, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: user.id },process.env.JWT_KEY, { expiresIn: '7d' });

    // Store the refresh token in the database or in-memory store
    refreshTokens[refreshToken] = user.id;

    return { accessToken, refreshToken };
}