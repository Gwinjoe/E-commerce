const Products = require("../models/productSchema")
const getProducts = async (req, res) => {
  const results = await Products.find().sort({ createdAt: -1 });
  res.status(200).json(results);
}

module.exports = { getProducts }
