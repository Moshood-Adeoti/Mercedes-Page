import { useContext } from "react"
import { ThemeContext } from "../../Globalcontext"
import ThemeToggle from "../../ThemeToggle"
import { FaTrashAlt } from "react-icons/fa"

const orders = [
  {
    id: 1,
    name: "Mercedes EQB SUV",
    price: 53050,
    image:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqb-class/all-vehicles/2024-EQB250-SUV-AVP-DR.png",
    quantity: 1,
    status: "Processing",
  },

  {
    id: 2,
    name: "Mercedes GLA SUV",
    price: 41500,
    image:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/gla-class/all-vehicles/2024-GLA-SUV-AVP-DR.png",
    quantity: 2,
    status: "Delivered",
  },
]

export default function Order() {

  const { theme } = useContext(ThemeContext)

  const pageStyle = `
    min-h-screen w-full transition-all duration-300
    ${theme === "dark"
      ? "bg-gray-900 text-white"
      : "bg-gray-100 text-black"}
  `

  const cardStyle = `
    rounded-2xl p-4 border transition-all duration-300
    ${theme === "dark"
      ? "bg-gray-800 border-gray-700"
      : "bg-white border-gray-200"}
  `

  const totalPrice = orders.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className={pageStyle}>

      <div className="flex justify-end p-4">
        <ThemeToggle />
      </div>

      <div className="px-4 md:px-8 max-w-6xl mx-auto">

        <div className="bg-purple-700 text-white rounded-2xl p-6 mb-8">
          <h1 className="text-3xl font-bold">🛒 My Orders</h1>
          <p className="text-sm text-blue-200 mt-1">
            Manage all your ordered vehicles
          </p>
        </div>

        <div className="grid gap-6">

          {orders.map((item) => (
            <div
              key={item.id}
              className={`${cardStyle} flex flex-col md:flex-row gap-6 items-center`}
            >

              <div className="bg-gray-100 rounded-xl p-4 h-[180px] w-full md:w-[250px] flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full object-contain"
                />
              </div>

              <div className="flex-1 w-full">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                  <h2 className="text-xl font-bold">
                    {item.name}
                  </h2>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold w-fit
                    ${item.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"}
                    `}
                  >
                    {item.status}
                  </span>

                </div>

                <p
                  className={`mt-3 text-sm ${
                    theme === "dark"
                      ? "text-gray-400"
                      : "text-gray-500"
                  }`}
                >
                  Quantity: {item.quantity}
                </p>

                <p className="mt-2 text-2xl font-bold text-green-500">
                  ${item.price.toLocaleString()}
                </p>

                <div className="flex gap-3 mt-5 flex-wrap">

                  <button
                    className="bg-purple-700 hover:bg-purple-600
                    text-white px-4 py-2 rounded-lg text-sm transition-all"
                  >
                    Track Order
                  </button>

                  <button
                    className="bg-red-500 hover:bg-red-600
                    text-white px-4 py-2 rounded-lg text-sm
                    flex items-center gap-2 transition-all"
                  >
                    <FaTrashAlt />
                    Cancel
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

        <div
          className={`mt-10 rounded-2xl p-6 border
          ${theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"}
          `}
        >

          <div className="flex items-center justify-between flex-wrap gap-4">

            <div>
              <h2 className="text-2xl font-bold">
                Total Amount
              </h2>

              <p
                className={`text-sm mt-1 ${
                  theme === "dark"
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                Total cost of all ordered vehicles
              </p>
            </div>

            <h1 className="text-3xl font-bold text-green-500">
              ${totalPrice.toLocaleString()}
            </h1>

          </div>

          <button
            className="mt-6 w-full bg-purple-700 hover:bg-purple-600
            text-white py-3 rounded-xl font-semibold transition-all"
          >
            Proceed To Payment
          </button>

        </div>

      </div>
    </div>
  )
}