import React from "react"

export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.jpg" : "star-empty.jpg"
    return (
        <img
            src={`../images/${starIcon}`}
            className="card--favorite"
            onClick={props.handleClick}
            alt=".."
        />
    )
}
