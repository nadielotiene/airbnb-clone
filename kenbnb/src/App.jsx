import React from "react"
import iconData from "./iconData"
import data from "./data"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Card from "./components/Card.jsx"
import Footer from "./components/Footer.jsx"
import { useState } from 'react'

export default function App() {
  const [heart, setHeart] = useState({
    isFavorite: false
  })

  let heartIcon = heart.isFavorite ? "heart-full.png" : "heart-empty.png"

  function toggleFavorite() {
    setHeart(prevState => ({
      ...prevState,
      isFavorite: !prevState.isFavorite
    }))
  }

  const cards = data.map(place => {
    return (
      <Card
        key={place.id}
        {...place}
        toggleClick={toggleFavorite}
        heartIcon={heartIcon}
      />
    )
  })

  const hero = iconData.map(icon => {
    return (
      <Hero
        key={icon.id}
        {...icon}
      />
    )
  })

  return (
    <>
    <Navbar />
      <section className="hero-section">
        {hero}
      </section>
      <section className="cards-list">
        {cards}
        {cards}
        {cards}
        {cards}
        {cards}
      </section>
      <Footer />
    </>
  )
}
