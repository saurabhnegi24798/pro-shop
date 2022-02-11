const express = require("express")
const router = express.Router()
const asyncHandler = require("express-async-handler")
const Product = require("../models/productModel")

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ message: "Product Not Found" })
    }
  })
)

module.exports = router
