const express = require("express");
const router = express.Router();
const path = require("path");
const { isLoggedIn } = require("../middlewares/identifier")

// root routes

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "login.html"));
});

router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "register.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "about.html"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "contact.html"));
});

router.get("/authorise", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "authentication.html"));
});

router.get("/faq", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "faq.html"));
})


router.use(isLoggedIn);
router.get("/product", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "product.html"));
});

router.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "shop.html"));
});

router.get("/chat", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "chat.html"));
});
router.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "cart.html"));
});
//user routes
router.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "users", "dashboard.html"))
});

router.get("/logout", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "users", "logout.html"))
});

router.get("/profile", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "users", "profile.html"))
});

router.get("/orders", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "users", "orders.html"))
});

router.get("/wishlist", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "users", "wishlist.html"))
});





// on hold for routes for checkout

module.exports = router;
