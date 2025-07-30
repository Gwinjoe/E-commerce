const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).redirect("/login");
  }
}

const isAdmin = (req, res, next) => {
  if (req.isAuthenticated() && req.user.admin) {
    next();
  } else {
    res.status(401).redirect("/admin/login");
  }
}


module.exports = { isLoggedIn, isAdmin }
