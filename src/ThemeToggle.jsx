import { useContext } from "react";
import { ThemeContext } from "./Globalcontext";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`cursor-pointer px-4 py-2 rounded-lg font-semibold transition-all mt-6  ${theme === "light" ? "bg-white text-purple-700" : "bg-gray-900 text-white"
        }`}
    >
      {theme === "light" ?  ( 
        <p className="flex text-[15px] gap-2">Dark Theme <MdDarkMode  className="mt-1 text-black text-[18px]"/></p>
      ) : ( 
        <p className="flex text-[15px] gap-2">Light theme <MdLightMode  className="mt-1 text-White text-[18px]"/></p>
      )}
    </button>
  );
};

export default ThemeToggle;

//<MdDarkMode />   <CiLight />