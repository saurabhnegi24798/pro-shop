import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header.js"
import "./bootstrap.min.css"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
import { BrowserRouter as Router, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
      </main>
      <Footer />
    </Router>
  )
}

export default App
