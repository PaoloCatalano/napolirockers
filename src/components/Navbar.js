import React from "react"
import Logo from "./Logo"
import links from "../constant/links"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div style={{ margin: "5px 10px" }}>
        <Logo width={100} />
      </div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l.id}>
            <Link
              to={l.url}
              activeStyle={{ color: "#424244", textDecoration: "underline" }}
            >
              {l.text}
            </Link>
          </li>
        ))}
      </ul>
      <div style={{ display: "none" }}>
        <button>menu</button>
      </div>
    </nav>
  )
}
