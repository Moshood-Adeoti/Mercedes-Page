import React, { useState, useContext } from "react";
import { ThemeContext } from "../Globalcontext";

const transactions = [
  {
    name: "Adeoti Moshood",
    amount: 53050,
    time: "04:59",
    payedTo: "Moniepoint Account",
    itemBought: "Mercedes EQB SUV",
    status: "Successful",
    id: 1,
  },

  {
    name: "Oladimeji Hassan",
    amount: 41500,
    time: "05:12",
    payedTo: "Palmpay Business Account",
    itemBought: "Mercedes GLA SUV",
    status: "Successful",
    id: 2,
  },

  {
    name: "Olaoye Temiloluwa",
    amount: 42750,
    time: "05:17",
    payedTo: "UBA Company Account",
    itemBought: "Mercedes CLA Coupe",
    status: "Pending",
    id: 3,
  },

  {
    name: "Adeoti Rauf",
    amount: 41500,
    time: "04:19",
    payedTo: "First Bank Account",
    itemBought: "Mercedes GLA SUV",
    status: "Pending",
    id: 4,
  },

  {
    name: "Dawodu Gbolahan",
    amount: 68050,
    time: "04:34",
    payedTo: "Zenith Bank",
    itemBought: "Mercedes CLE Cabriolet",
    status: "Cancelled",
    id: 5,
  },

  {
    name: "Adewole Daniel",
    amount: 32000,
    time: "04:40",
    payedTo: "Fidelity Bank PLC",
    itemBought: "Mercedes 4MATIC Benz",
    status: "Pending",
    id: 6,
  },

  {
    name: "Abdusalam Abdullah",
    amount: 42021,
    time: "04:47",
    payedTo: "MoniePoint Account",
    itemBought: "Mercedes GLE 350",
    status: "Successful",
    id: 7,
  },
];

const cards = [
  {
    name: "Mercedes EQB SUV",
    price: 53050,
    images:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqb-class/all-vehicles/2024-EQB250-SUV-AVP-DR.png",
    desc: "Naturally resourceful",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedes GLA SUV",
    price: 41500,
    images:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/gla-class/all-vehicles/2024-GLA-SUV-AVP-DR.png",
    desc: "Small footprint big impression",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedes CLA Sedans",
    price: 45670,
    images:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my26/cla-sedan/all-vehicles/2026-CLA-SEDAN-AVP-DR.png",
    desc: "Beyond intelligent within reach",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedes CLA Coupe",
    price: 42750,
    images:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cla-class/all-vehicles/2024-CLA-250-4M-COUPE-AVP-DR.png",
    desc: "Seduction, style and substance",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedes AMG GT 4-door...",
    price: 42750,
    images:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cla-class/all-vehicles/2024-CLA-250-4M-COUPE-AVP-DR.png",
    desc: "Practically exotic",
    rate: "⭐⭐⭐⭐⭐",
  },

  {
    name: "Mercedes CLE Cabriolet",
    price: 68050,
    images:
      "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my25/cle-class/cle-cab/all-vehicles/2025-CLE300-4M-CAB-AVP-DR.png",
    desc: "Solar flair",
    rate: "⭐⭐⭐⭐⭐",
  },
];

const statusStyle = {
  Successful:
    "bg-green-500 text-white",

  Cancelled:
    "bg-red-500 text-white",

  Pending:
    "bg-yellow-500 text-white",
};

function Dashboard() {

  const [cart, setCart] = useState([]);
  const { theme } = useContext(ThemeContext);

  function addToCart(product) {

    const exists = cart.find(
      (items) => items.name === product.name
    );

    if (exists) {

      setCart(
        cart.map((items) =>
          items.name === product.name
            ? {
                ...items,
                quantity: items.quantity + 1,
              }
            : items
        )
      );

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }

  return (
    <div
      className={`min-h-screen w-full p-4 md:p-6 transition-all duration-300
      ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >

      {/* HERO SECTION */}

      <div
        className={`rounded-2xl py-8 px-4 md:px-8 shadow-lg
        ${
          theme === "dark"
            ? "bg-gray-800"
            : "bg-purple-700"
        }`}
      >

        <h1 className="text-center text-white font-bold text-2xl md:text-4xl">
          Hello! Moshood Adeoti
        </h1>

        <p className="text-center text-white text-lg md:text-2xl mt-4 font-semibold">
          Welcome to your dashboard 👋
        </p>

      </div>

      {/* PRODUCTS */}

      <div
        className={`mt-8 rounded-2xl p-4 md:p-6
        ${
          theme === "dark"
            ? "bg-gray-800"
            : "bg-purple-700"
        }`}
      >

        <h1 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
          Featured Cars
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {cards.map((items) => (

            <div
              key={items.name}
              className={`rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.02]
              ${
                theme === "dark"
                  ? "bg-gray-700"
                  : "bg-white"
              }`}
            >

              <div className="bg-gray-100 h-[220px] flex items-center justify-center">

                <img
                  src={items.images}
                  alt={items.name}
                  className="w-full h-full object-contain hover:scale-105 transition-all duration-500"
                />

              </div>

              <div className="p-4">

                <h3
                  className={`text-center font-bold text-lg
                  ${
                    theme === "dark"
                      ? "text-blue-300"
                      : "text-purple-700"
                  }`}
                >
                  {items.name}
                </h3>

                <p
                  className={`text-center mt-2 text-sm
                  ${
                    theme === "dark"
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {items.desc}
                </p>

                <p className="text-center text-red-500 font-bold text-2xl mt-3">
                  ${items.price.toLocaleString()}
                </p>

                <p className="text-center mt-1">
                  {items.rate}
                </p>

                <button
                  onClick={() => addToCart(items)}
                  className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Add To Cart
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* CART */}

      <div
        className={`mt-8 rounded-2xl p-4 md:p-6
        ${
          theme === "dark"
            ? "bg-gray-800"
            : "bg-purple-700"
        }`}
      >

        <h1 className="text-center text-white text-3xl font-bold">

          Cart

          <span className="ml-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-lg">
            {cart.length}
          </span>

        </h1>

        {cart.length === 0 ? (

          <div className="py-12">

            <h4 className="text-center text-white font-semibold text-xl">
              Your cart is empty 🛒
            </h4>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">

            {cart.map((items) => (

              <div
                key={items.name}
                className={`rounded-2xl overflow-hidden shadow-md
                ${
                  theme === "dark"
                    ? "bg-gray-700"
                    : "bg-white"
                }`}
              >

                <div className="bg-gray-100 h-[180px] flex items-center justify-center">

                  <img
                    src={items.images}
                    alt={items.name}
                    className="w-full h-full object-contain"
                  />

                </div>

                <div className="p-4">

                  <h2 className="text-center font-bold">
                    {items.name}
                  </h2>

                  <p className="text-center text-green-500 font-bold mt-2">
                    ${items.price.toLocaleString()}
                  </p>

                  <p className="text-center text-yellow-500 font-bold mt-2">
                    Qty: {items.quantity}
                  </p>

                </div>

              </div>
            ))}

          </div>
        )}
      </div>

      {/* TRANSACTIONS */}

      <div className="mt-10 overflow-x-auto">

        <h1
          className={`text-center text-2xl md:text-3xl underline font-bold mb-6
          ${
            theme === "dark"
              ? "text-blue-300"
              : "text-purple-700"
          }`}
        >
          Transaction History
        </h1>

        <table
          className={`min-w-[950px] w-full border rounded-xl overflow-hidden
          ${
            theme === "dark"
              ? "bg-gray-800 border-gray-600"
              : "bg-white border-purple-700"
          }`}
        >

          <thead
            className={`text-sm md:text-base
            ${
              theme === "dark"
                ? "text-blue-300"
                : "text-purple-700"
            }`}
          >

            <tr>

              <th className="p-3 border">S/N</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Amount</th>
              <th className="p-3 border">Time</th>
              <th className="p-3 border">Bank</th>
              <th className="p-3 border">Item Bought</th>
              <th className="p-3 border">Status</th>

            </tr>

          </thead>

          <tbody>

            {transactions.map((trans) => (

              <tr
                key={trans.id}
                className={`text-center
                ${
                  theme === "dark"
                    ? "border-gray-600"
                    : "border-purple-700"
                }`}
              >

                <td className="p-3 border">
                  {trans.id}
                </td>

                <td className="p-3 border">
                  {trans.name}
                </td>

                <td className="p-3 border text-green-500 font-semibold">
                  ${trans.amount.toLocaleString()}
                </td>

                <td className="p-3 border text-red-400">
                  {trans.time}
                </td>

                <td className="p-3 border">
                  {trans.payedTo}
                </td>

                <td className="p-3 border text-blue-400">
                  {trans.itemBought}
                </td>

                <td className="p-3 border">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${statusStyle[trans.status]}`}
                  >
                    {trans.status}
                  </span>

                </td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;