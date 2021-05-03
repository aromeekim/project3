module.exports = function (req, res, next) {
    // Status code of 401 if user is Unauthorized
    if (!req.user) return res. status(401).json('Unauthorized');
    // If everything is okay
    next(); 
}