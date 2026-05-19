import { useContext } from "react"
import { ThemeContext } from "../../Globalcontext"
import ThemeToggle from "../../ThemeToggle"
import image from "./images/image.png"

export default function Profile() {

const { theme } = useContext(ThemeContext)

const cardStyle = `
mb-4 font-semibold flex text-[18px] px-4 py-3 rounded-lg border
${theme === "dark"
? "bg-gray-800 border-gray-600 text-white"
: "bg-white border-black text-black"}
`

    return(
        <div className={`min-h-screen w-full transition-all duration-300 ${
            theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gray-100 text-black"
        }`}>

            <div className="flex justify-end p-4">
                <ThemeToggle />
            </div>

            <h2 className="text-center text-3xl mb-10 underline font-bold">
                My Profile
            </h2>

            <div className="flex flex-col md:flex-row gap-12 px-8 items-center">

                <img
                    src={image}
                    alt="Profile"
                    className="h-[200px] w-[210px]   rounded-full object-cover border-2 border-blue-500 shadow-lg"
                />

                <div className="w-full max-w-3xl">

                    <p className={cardStyle}>
                        Name:
                        <span className="ml-4 font-normal">
                            Adeoti Moshood
                        </span>
                    </p>

                    <p className={cardStyle}>
                        Phone No:
                        <span className="ml-4 font-normal">
                            +234 7069146405
                        </span>
                    </p>

                    <p className={cardStyle}>
                        Occupation:
                        <span className="ml-4 font-normal">
                            Student, Aspiring Web Developer
                        </span>
                    </p>

                    <p className={cardStyle}>
                        Email:
                        <span className="ml-4 font-normal">
                            adeotimoshood9@gmail.com
                        </span>
                    </p>

                    <p className={cardStyle}>
                        Gender:
                        <span className="ml-4 font-normal">
                            Male
                        </span>
                    </p>

                    <p className={cardStyle}>
                        Secondary School:
                        <span className="ml-4 font-normal">
                            Adventist Comprehensive High School
                        </span>
                    </p>

                    <p className={cardStyle}>
                        Address:
                        <span className="ml-4 font-normal">
                            Odo Oja Str, Otun-Ekiti, Ekiti State, Nigeria
                        </span>
                    </p>

                </div>
            </div>
        </div>
    )
}







 