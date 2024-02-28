import React from "react"
import Star from "./Star"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "Angel",
        lastName: "Smith",
        occupation: " Senior Frontend Developer",
        email: "angelsmith1988@gmail.com",
        isFavorite: true
    })

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }

    return (
        <main>
            <article className="card">
              <span>
                <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
              </span>
              <div class="cover-photo">
              <img src="../images/angel.jpg" class="profile" alt=".." />
            </div>
            <div className="card--info">

              <h2 className="card--name">
                {contact.firstName} {contact.lastName}
              </h2>
              <p className="card--contact">{contact.occupation}</p>
              <p className="card--contact">{contact.email}</p>
            </div>
              <button className="btn">MESSAGE</button>
              <button className="btn">FOLLOW</button>
            </article>
        </main>
    )
}
