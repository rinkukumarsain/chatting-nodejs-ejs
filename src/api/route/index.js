module.exports = (app) => {
    app.use(require('./createUser'));
    app.use(require('./login'));
    app.use(require('./otpCheck'));
    app.use(require('./room'));
    app.use(require('./chat'));
};
