const express = require("express");
const router = express.Router();
const path = require("path");
const { isAdmin } = require("../middlewares/identifier");

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "admin", "index.html"));
});

router.use(isAdmin);

router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "register.html"));
});

router.get("/logout", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "admin", "logout.html"));
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "admin", "dashboard.html"));
});

router.get("/orders", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "admin", "orders.html"));
});

router.get("/product", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "admin", "product.html"));
});

router.get("/categories", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "admin", "categories.html"));
})

router.get("/view_category", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "admin", "view_category.html"));
});

router.get("/add_category", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "admin", "add_category.html"));
});

router.get("/add_product", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "admin", "add_product.html"));
});

router.get("/manage_users", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "admin", "manage_users.html"));
});

router.get("/order_details", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "admin", "order_details.html"));
});

router.get("/edit_category", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "admin", "edit_category.html"));
});

router.get("/edit_product", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "admin", "edit_product.html"));
});


module.exports = router;
