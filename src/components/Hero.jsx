import React from "react"

export default function Hero(props) {
    return (
        <div className="hero-div">
            <img
                className="rent-type"
                src={props.source}
                alt={props.alt}
            />
            <p className="icons-name">{props.alt}</p>
        </div>
    )
}

        // <>
            // <span className="hero-span">

            // </span>
        //     <button className="filters-btn">
        //         <img className="filters-icon" src="/filters.png" alt="filters-icon" />
        //         Filters
        //     </button>
        // </>