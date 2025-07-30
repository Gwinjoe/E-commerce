const express = require("express");
const router = express.Router();
const { getProducts } = require("../../controllers/productController")
const passport = require("passport");
const { isLoggedIn, isAdmin } = require("../../middlewares/identifier")
const { signup } = require("../../controllers/authController.js")

router.get("/products", getProducts)
router.post("/login", passport.authenticate("local", { successRedirect: "/dashboard", failureRedirect: "/" }));
router.post("/admin/login", passport.authenticate("local", { successRedirect: "/admin", failureRedirect: "/" }));
router.post("/signup", signup)

module.exports = router;
