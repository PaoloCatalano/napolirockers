import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Logo({ width }) {
  return (
    <div style={{ width }}>
      <StaticImage
        src="../assets/images/logo.jpg"
        alt="Napoli Rockers Syndicate"
        placeholder="tracedSVG"
        layout="fullWidth"
      />
    </div>
  )
}
