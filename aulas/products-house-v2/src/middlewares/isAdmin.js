const isAdmin = (req, res, next) => {
    const { user } = req.session;

    if (!user || !user.isAdmin) {
        return res.redirect("/")
    }

    return next()
}

module.exports = isAdmin;