import React from "react"
import HeaderImage from "./components/Header"
import HeaderContent from "./components/HeaderContent"
import MainContent from "./components/Main"
import Footer from "./components/Footer"
import "./App.css"

export default function App() {
  return (
    <div>
      <HeaderImage />
      <HeaderContent />
      <MainContent />
      <Footer />
    </div>
  )
}
