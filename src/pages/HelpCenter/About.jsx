import { useContext } from "react"
import { ThemeContext } from "../../Globalcontext"
import ThemeToggle from "../../ThemeToggle"
import Screenshot from "../HelpCenter/Screenshot.png"
import { MdAddIcCall, MdOutlineMailOutline } from "react-icons/md"
 


export default function About() {
  const { theme } = useContext(ThemeContext)

  const pageStyle = `min-h-screen w-full transition-all duration-300 ${
    theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
  }`

  const cardStyle = `px-4 py-3 rounded-lg border mb-3 ${
    theme === "dark"
      ? "bg-gray-800 border-gray-600 text-white"
      : "bg-white border-black text-black"
  }`

  return (
    <div className={pageStyle}>

      {/* Top bar */}
      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>

      {/* Title */}
      <h2 className="text-center text-3xl mb-10 underline font-bold">
        About
      </h2>

      <div className="px-4 md:px-8 max-w-xl mx-auto">

        {/* Avatar */}
        <div className="flex justify-center mb-6">
        <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
  <img src= {Screenshot} alt="Adeoti Moshood" className="w-full h-full object-cover" />
</div>
        </div>

        {/* Name & role */}
        <p className="text-center text-xl font-bold mb-1">Adeoti Moshood</p>
        <p className={`text-center text-sm mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
          Aspiring Web Developer · Student
        </p>

        {/* About text */}
        <div className={cardStyle}>
          <p className="font-semibold mb-1">Who I Am</p>
          <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            I am Adeoti Moshood, a passionate and dedicated student from Otun-Ekiti, 
            Nigeria. I am currently learning web development with a focus on building 
            modern and responsive React applications.
          </p>
        </div>

        {/* Goal */}
        <div className={cardStyle}>
          <p className="font-semibold mb-1">My Goal</p>
          <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            To become a professional frontend developer and build useful, 
            beautiful web applications that solve real-world problems.
          </p>
        </div>

        {/* Stack */}
        <div className={cardStyle}>
          <p className="font-semibold mb-2">My Stack</p>
          <div className="flex flex-wrap gap-2">
            {["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"].map((tech) => (
              <span
                key={tech}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-700 text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className={cardStyle}>
          <p className="font-semibold mb-1">Contact</p>
          <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            <span><MdOutlineMailOutline  className={` text-2xl ${theme === "dark" ? "text-white" : "text-purple-700"}`}/></span> adeotimoshood9@gmail.com
          </p>
          <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            <span><MdAddIcCall className={` text-2xl ${theme === "dark" ? "text-white" : "text-purple-700"}`} /></span> +234 7069146405
          </p>
        </div>

      </div>
    </div>
  )
}