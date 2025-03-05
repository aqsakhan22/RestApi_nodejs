const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

app.post('/refresh-token', (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken || !refreshTokens[refreshToken]) {
        return res.sendStatus(403);
    }

    jwt.verify(refreshToken,process.env.JWT_KEY, (err, user) => {
        if (err) return res.sendStatus(403);

        // Generate a new access token
        const newAccessToken = jwt.sign({ userId: user.userId },process.env.JWT_KEY, { expiresIn: '15m' });

        res.json({ accessToken: newAccessToken });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});