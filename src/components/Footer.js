import React from "react"
import Socials from "../constant/socials"

const Footer = () => {
  return (
    <footer>
      <Socials styleClass="social-footer" />
      <div>
        &copy; {new Date().getFullYear()} Napoli Rockers Syndicate · All rights
        reserved.
      </div>
    </footer>
  )
}

export default Footer
