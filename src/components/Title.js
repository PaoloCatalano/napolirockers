import React from "react"

const Title = ({ title = "title" }) => {
  return (
    <div className="title">
      <h2>
        <span>Napoli Rockers Syndicate</span> {title}
      </h2>
    </div>
  )
}

export default Title
