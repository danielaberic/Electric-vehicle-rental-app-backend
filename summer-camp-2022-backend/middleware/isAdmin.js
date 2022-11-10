class isUserAdmin {
  static isAdmin(req, res, next) {
    if (!req.user.isAdmin) {
      return res.status(403).json({
        error: 'User is not admin.',
      });
    }
    return next();
  }
}

export default isUserAdmin;
