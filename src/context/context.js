import React, { createContext, useContext } from "react"

const Context = createContext()

const Provider = ({ children }) => {
  return <Context.Provider value={"empty"}>{children}</Context.Provider>
}

export const useGlobalContext = () => {
  return useContext(Context)
}
// import { useGlobalContext } from '../context/context'
// const { "empty" } = useGlobalContext()

export { Context, Provider }
