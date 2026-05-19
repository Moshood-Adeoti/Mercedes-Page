import { useContext, useState } from "react"
import { ThemeContext } from "../../Globalcontext"
import ThemeToggle from "../../ThemeToggle"
import { CiSearch } from "react-icons/ci"
import { IoIosArrowForward, IoIosSearch } from "react-icons/io"

const products = [

  {
    name: "Mercedez EQB SUV",
    price: 53050,
    status: "Available",
    images:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqb-class/all-vehicles/2024-EQB250-SUV-AVP-DR.png",
    desc: "Naturally resourceful",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedez GLA SUV",
    price: 41500,
    status: "Available",
    images:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/gla-class/all-vehicles/2024-GLA-SUV-AVP-DR.png",
    desc: "Small footprint big impression",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedez CLA SEDANS",
    price: 45670,
    status: "Reserved",
    images:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my26/cla-sedan/all-vehicles/2026-CLA-SEDAN-AVP-DR.png",
    desc: "Beyond intelligent within reach",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedez CLA COUPE",
    price: 42750,
    status: "Available",
    images:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cla-class/all-vehicles/2024-CLA-250-4M-COUPE-AVP-DR.png",
    desc: "Seduction, style and substance",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedez AMG GT 4-door",
    price: 42750,
    status: "Sold Out",
    images:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cla-class/all-vehicles/2024-CLA-250-4M-COUPE-AVP-DR.png",
    desc: "Practically exotic",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedez CLE Cabriolet",
    price: 68050,
    status: "Available",
    images:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my25/cle-class/cle-cab/all-vehicles/2025-CLE300-4M-CAB-AVP-DR.png",
    desc: "Solar flair",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedez GLE 450",
    price: 72000,
    status: "Available",
    images:
      "data:image/jpeg;base64,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",
    desc: "Powerful and refined luxury SUV",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedez GLS 580",
    price: 98000,
    status: "Reserved",
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzB19z8GsfkT_-hUHhW__DVGmEZN-bT-dBSQ&s",
    desc: "Premium full-size SUV comfort",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedez C-Class Sedan",
    price: 48000,
    status: "Available",
    images:
      "data:image/jpeg;base64,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",
    desc: "Elegant and sporty sedan",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedez S-Class",
    price: 117000,
    status: "Available",
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRy6a_xCLKmbB3MnWkkLPZFKYQNuBaq30Lqg&s",
    desc: "The definition of luxury driving",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedez AMG SL Roadster",
    price: 135000,
    status: "Sold Out",
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScK6Hcg2yPJMa6Zkrsk9KIAaPVqrW6cfTi7w&s",
    desc: "Open-top AMG performance",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedez EQS Sedan",
    price: 104000,
    status: "Available",
    images:
      "data:image/jpeg;base64,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",
    desc: "Futuristic electric luxury sedan",
    rate: "⭐⭐⭐⭐⭐",
  },

];

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