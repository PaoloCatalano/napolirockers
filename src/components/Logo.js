import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
export default function Logo({ width = 150 }) {
  return (
    <Link className="hover" to="/">
      <div style={{ width }}>
        <StaticImage
          src="../assets/images/Napoli Rockers Syndicate logo black.png"
          alt="Napoli Rockers Syndicate"
          placeholder="blurred"
          layout="fullWidth"
        />
      </div>
    </Link>
  )
}
