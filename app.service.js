const jwt = require('jsonwebtoken');
const secretKey = 'Sample'

const users = [
    { id: 1, username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: 'Admin' },
    { id: 2, username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: 'User' }
];


module.exports = {
    handleAuthenticateRequest
};

async function handleAuthenticateRequest({username, password}) {
    const user = users.find(s => s.username === username && s.password === password);
    if (user) {
        const token = jwt.sign({
            sub: user.id,
            role: user.role
        }, secretKey);
        const { password, ...resultUser } = user;
        return {
            ...resultUser,
            token
        }
    }
}
