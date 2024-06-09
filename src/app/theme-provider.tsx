'use client'
import { createContext, useState } from 'react'
 
export const AppContext = createContext({})
 
export default function ThemeProvider({ children }:any) {
    const [user, setUser] = useState<any>()
    const [token,setToken] = useState<string>()
  return <AppContext.Provider value={{
      user,
      token,
      setUser,
      setToken
    }}>{children}</AppContext.Provider>
}