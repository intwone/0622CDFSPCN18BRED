const isLogin = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    res.locals.user = req.session.user;
    return next()
}

module.exports = isLogin