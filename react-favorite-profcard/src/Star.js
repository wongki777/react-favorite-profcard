import React from "react"

export default function Star(props) {
    const starIcon = props.isFilled ? "star-filled.jpg" : "star-empty.jpg"
    const buttonLabel = props.isFilled ? "Unmark as favorite" : "Mark as favorite"
    return (
      <button
        onClick={props.handleClick}
        className="star--icon"
        aria-label={buttonLabel}
        aria-pressed={props.isFilled}
      >
        <img
            src={`../images/${starIcon}`}
            className="card--favorite"
            alt=".."
        />
      </button>

    )
}
