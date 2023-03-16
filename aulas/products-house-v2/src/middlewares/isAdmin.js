const isAdmin = (req, res, next) => {
    const { user } = req.session;

    if (user.isAdmin) {
        return next()
    }

    return res.redirect("/")
}

module.exports = isAdmin;