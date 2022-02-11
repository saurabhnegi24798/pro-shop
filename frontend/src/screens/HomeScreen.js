import React from "react"
import { Col, Row } from "react-bootstrap"
import axios from "axios"
import { useState, useEffect } from "react"
import Product from "../components/Product"

const HomeScreen = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products")
      setProducts(data)
    }
    fetchProducts()
  }, [])
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col sm={10} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
