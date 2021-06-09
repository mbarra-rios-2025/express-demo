function authenticate(req, res, next) {
    console.log('Aunthenticating...');
    next();
}

module.exports = authenticate;