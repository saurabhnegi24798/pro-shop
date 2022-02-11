const express = require("express")
const products = require("./data/products")
const app = express()
const dotenv = require("dotenv")
const connectDb = require("./config/db")
const colors = require("colors")
const productRoutes = require("./routes/productRoutes")

dotenv.config({ path: `${__dirname}/.env` })

connectDb()

const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.send("Get request")
})

app.use("/api/products", productRoutes)

app.listen(PORT, console.log(`server started at port ${PORT}`.yellow.bold))
