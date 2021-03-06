const jwt = require('jsonwebtoken');
const secretKey = 'Sample'

const checkToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                return res.json({
                    success: false,
                    message: 'Token is not valid'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        })
    } else {
        res.json({
            success: false,
            message: 'Token is not supplied'
        })
    }
}

module.exports = {
    checkToken: checkToken
}