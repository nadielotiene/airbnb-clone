// import React from "react"
import iconData from "./iconData"
import data from "./data"
import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import Footer from "./Footer"
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
