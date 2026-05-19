import { useContext, useState } from "react"
import { ThemeContext } from "../../Globalcontext"
import ThemeToggle from "../../ThemeToggle"
import { CiSearch } from "react-icons/ci"
import { IoIosArrowForward, IoIosSearch } from "react-icons/io"

const products = [
  { name: "Mercedez EGB SUV",          price: 53050, status: "Available", images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqb-class/all-vehicles/2024-EQB250-SUV-AVP-DR.png",         desc: "Naturally resourceful",        rate: "⭐⭐⭐⭐⭐" },
  { name: "Mercedez GLA SUV",          price: 41500, status: "Available", images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/gla-class/all-vehicles/2024-GLA-SUV-AVP-DR.png",             desc: "Small footprint big impression", rate: "⭐⭐⭐⭐⭐" },
  { name: "Mercedez CLA SEDANS",       price: 45670, status: "Reserved",  images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my26/cla-sedan/all-vehicles/2026-CLA-SEDAN-AVP-DR.png",           desc: "Beyond intelligent within reach", rate: "⭐⭐⭐⭐⭐" },
  { name: "Mercedez CLA COUPE",        price: 42750, status: "Available", images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cla-class/all-vehicles/2024-CLA-250-4M-COUPE-AVP-DR.png",   desc: "Seduction, style and substance", rate: "⭐⭐⭐⭐⭐" },
  { name: "Mercedez AMG GT 4-door",    price: 42750, status: "Sold Out",  images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cla-class/all-vehicles/2024-CLA-250-4M-COUPE-AVP-DR.png",   desc: "Practically exotic",           rate: "⭐⭐⭐⭐⭐" },
  { name: "Mercedez CLE Cabriolet",    price: 68050, status: "Available", images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my25/cle-class/cle-cab/all-vehicles/2025-CLE300-4M-CAB-AVP-DR.png", desc: "Solar flair",               rate: "⭐⭐⭐⭐⭐" },
]

const STATUS_STYLES = {
  Available: "bg-green-100 text-green-700",
  "Sold Out": "bg-red-100 text-red-700",
  Reserved:   "bg-yellow-100 text-yellow-700",
}

const FILTERS = ["All", "Available", "Reserved", "Sold Out"]

export default function Marketplace() {
  const { theme } = useContext(ThemeContext)
  const [search,       setSearch] = useState("")
  const [activeFilter, setFilter] = useState("All")

  const filtered = products.filter((car) => {
    const matchSearch = car.name.toLowerCase().includes(search.toLowerCase())
    const matchFilter = activeFilter === "All" || car.status === activeFilter
    return matchSearch && matchFilter
  })

  const pageStyle = `min-h-screen w-full transition-all duration-300 ${
    theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
  }`

  const cardStyle = `rounded-xl border overflow-hidden transition-all duration-300
    hover:scale-[1.02] hover:shadow-lg cursor-pointer ${
    theme === "dark" ? "bg-gray-800 border-gray-600" : "bg-white border-gray-200"
  }`

  const inputStyle = `w-full pl-10 pr-4 py-2 rounded-lg border text-sm outline-none
    transition-all duration-200 ${
    theme === "dark"
      ? "bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
      : "bg-white border-gray-300 text-black placeholder:text-gray-400"
  }`

  const filterBtn = (f) => `px-4 py-1.5 rounded-full text-sm font-semibold border
    transition-all duration-200 ${
    activeFilter === f
      ? "bg-purple-700 text-white border-white"
      : theme === "dark"
        ? "bg-gray-800 border-gray-600 text-gray-300 hover:border-blue-500"
        : "bg-white border-gray-300 text-gray-600 hover:border-blue-500"
  }`

  return (
    <div className={pageStyle}>

      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>

      <div className="mx-4 md:mx-8 rounded-2xl bg-purple-700 text-white px-6 py-8 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">🚗 Mercedes Marketplace</h1>
        <p className="text-sm mt-1 text-blue-200">Browse and find your perfect Mercedes vehicle</p>
        <p className="text-blue-300 text-xs mt-1">{products.length} vehicles listed</p>
      </div>

      <div className="px-4 md:px-8 max-w-6xl mx-auto">

        <div className="relative mb-4">
          <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="search"
            placeholder="Search for a car..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={inputStyle}
          />
        </div>

        <div className="flex gap-2 flex-wrap mb-6">
          {FILTERS.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={filterBtn(f)}>
              {f}
            </button>
          ))}
        </div>

        <p className={`text-sm mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
          Showing {filtered.length} {filtered.length === 1 ? "vehicle" : "vehicles"}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-4xl mb-3"><IoIosSearch/></p>
            <p className="font-semibold text-lg">No cars found</p>
            <p className={`text-sm mt-1 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
              Try a different search or filter
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {filtered.map((car, index) => (
              <div key={index} className={cardStyle}>

                <div className="bg-gray-100 h-[180px] flex items-center justify-center">
                  <img
                    src={car.images}     
                    alt={car.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="font-bold text-[15px]">{car.name}</h2>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_STYLES[car.status]}`}>
                      {car.status}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed mb-1 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}>{car.desc}</p>

                  <p className="text-sm mb-3">{car.rate}</p>

                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-green-500">
                      ${car.price.toLocaleString()}
                    </p>
                    <button className="flex items-center gap-1 text-sm font-semibold
                      bg-purple-700 hover:bg-purple-500 text-white px-3 py-1.5 rounded-lg
                      transition-all duration-200">
                      View <IoIosArrowForward />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}