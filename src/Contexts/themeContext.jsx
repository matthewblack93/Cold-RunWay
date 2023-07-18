import React from 'react'
import {createContext,useState} from "react";
const themeContext=createContext()
export const ThemeContextProvider = ({children}) => {
    const [theme,setTheme]=useState("light");
    const [themeToggle,setThemeToggle]=useState(false);
    const handleTheme=()=>{
        if(!themeToggle){

            setTheme("dark")
            setThemeToggle(true)
        }else{
            setTheme("light")
            setThemeToggle(false)
            
        }
    }

  return (
    <themeContext.Provider value={{theme,handleTheme}}>
        {children}
    </themeContext.Provider>
  )
}

export default themeContext