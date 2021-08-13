import React from "react"
import Footer from "./Footer"
import Title from "./Title"
import Seo from "./Seo"
import Navbar from "./Navbar"
const Layout = ({ children, title }) => {
  return (
    <>
      <Seo />
      <main>
        <Navbar />
        {/*
        {isSidebarOpen && <Sidebar />}
      */}
        <article>
          <Title title={title} />
          {children}
        </article>
        <Footer />
      </main>
    </>
  )
}

export default Layout
