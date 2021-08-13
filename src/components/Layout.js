import React from "react"
import Footer from "./Footer"
import Seo from "./Seo"
import Navbar from "./Navbar"
const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <main>
        <Navbar />
        {/*
        {isSidebarOpen && <Sidebar />}
      */}

        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
