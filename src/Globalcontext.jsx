import { createContext, useState } from "react";

export const LanguageContext = createContext()

export const ThemeContext = createContext()


const Globalcontext = ({children}) => {

    const [language, setLanguage] = useState("en")
    const [theme, setTheme] = useState("light")

    return(

           <LanguageContext.Provider value={{language, setLanguage}}>
  <ThemeContext.Provider value= {{theme, setTheme}} >

 

    <div className={`h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
          {children}
        </div>

  </ThemeContext.Provider>
           
           </LanguageContext.Provider>
    )
}

export default Globalcontext

 
