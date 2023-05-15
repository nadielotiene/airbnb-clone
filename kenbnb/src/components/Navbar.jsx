import React from "react"

export default function Navbar() {
    return (
        <nav className="nav-div">
            <span className="logo-span">
                <img className="logo" src="./public/airbnb.png" alt="airbnb logo" />
                <h2 className="nav-title">
                    kenbnb
                </h2>
            </span>
            <button className="search-btn">Anywhere ⎪ Any week ⎪ Add guests
                <img className="search-icon" src="./public/search.png" alt="search" /></button>
            <span className="user-span">
                <button className="renter-btn">
                    Kenbnb your home
                </button>
                <button className="globe-btn">
                    <img className="globe" src="./public/globe.png" alt="globe" />
                </button>
                <button className="user-menu-btn">
                    <img className="menu" src="./public/menu.png" alt="globe" />
                    <img className="user" src="./public/user.png" alt="user" />
                </button>
            </span>
        </nav>
    )
}
