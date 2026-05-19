// import React, { useState } from "react";


// const cards = [

//      {name: "Mercedez EGB SUV", price: 53050  , images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqb-class/all-vehicles/2024-EQB250-SUV-AVP-DR.png", desc: "Naturally resourceful", rate: "⭐⭐⭐⭐⭐" }, 
//       {name: "Mercedez GLA SUV", price: 41500 , images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/gla-class/all-vehicles/2024-GLA-SUV-AVP-DR.png", desc: "Small footprint big impression", rate: "⭐⭐⭐⭐⭐" },
//        {name: "Mercedez CLA SEDANS", price: 45670 , images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my26/cla-sedan/all-vehicles/2026-CLA-SEDAN-AVP-DR.png", desc: "Beyond intelligent within reach", rate: "⭐⭐⭐⭐⭐" },
//        {name: "Mercedez CLA COUPE", price: 42750 , images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cla-class/all-vehicles/2024-CLA-250-4M-COUPE-AVP-DR.png", desc: "Seduction, style and substance",  rate: "⭐⭐⭐⭐⭐" },
//        {name: "Mercedez AMG GT 4-door Coupe ", price: 42750 , images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cla-class/all-vehicles/2024-CLA-250-4M-COUPE-AVP-DR.png", desc: "Practically exotic", rate: "⭐⭐⭐⭐⭐" },
//        {name: "Mercedez CLE Cabriolet", price: 68050 , images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my25/cle-class/cle-cab/all-vehicles/2025-CLE300-4M-CAB-AVP-DR.png", desc: "Solar flair", rate: "⭐⭐⭐⭐⭐" },


// ]


// // {name: "", amount:  ,  time: "", payedTo: "", itemBought: (cards.name(1)), status: "", id: ""},
// // {name: "", amount:  ,  time: "", payedTo: "", itemBought: (cards.name(1)), status: "", id: ""},
// // {name: "", amount:  ,  time: "", payedTo: "", itemBought: (cards.name(1)), status: "", id: ""},

// ]

// const statusStyle = {
//     "Successful" : "bg-green-400 rounded-lg text-white text-center border border-white font-semibold",
//     "Cancelled": "bg-red-700 rounded-lg text-white text-center border border-white font0-semibold",
//     "Pending": "bg-yellow-500 rounded-lg text-white text-center  border border-white font-semibold",
// }

// function Dashboard(){

//     const [cart,  setCart] = useState([])

//     return(
//          <div className="bg-blue-400 h-full w-full">

// <div className="h-[15%] bg-purple-700 rounded-lg py-4"> <h1 className="text-center text-white font-bold text-3xl">
//     Hello! Moshood Adeoti
//     </h1>
//     <p className="px-[5%] text-center text-white text-2xl mt-4 font-semibold">Welcome to you dashboard 👋👋👋</p>
//     </div>

// <div className="bg-purple-700 px-6 py-6 mt-6 rounded-lg">
// <div className=" grid grid-cols-3 gap-2 px-2 mt-6 rounded-lg">
//     {cards.map((items, index) => 
//        <div key={index} className="px-2 bg-white items-center">
//        <img src={items.images} alt=""  className="hover:scale-105 transition-transform duration 700 ease-in-out text-black"/>
//        <h3 className="text-center text-purple-700 font-semibold">{items.name}</h3>
//        <p className="text-center font-semibold text-black, ">{items.desc}</p>
//        <p className="text-1xl text-center font-bold text-red">${items.price.toLocaleString()}</p>
//        <p className="text-center">{items.rate}</p>

//        <button className="p-2 bg-yellow-400 rounded-md text-white text-center font-semibold items-center ml-[70px] w-[160px] mt-2 mb-4">Add to Cart</button>

//        </div>
       



//     )}

// </div>
// </div>

//  <div className="bg-purple-700 mt-6">
//     <h1 className="text-center text-white text-3xl">Cart</h1>

//     <div className="grid grid-cols-4 gap-2 px-2 mt-6 rounded-lg">

// {
//     cart.length > 0 ? ("") : (
//         <div>
//            <h4 className="text-center text-white font-semibold text-2xl">Your cart is empty! Please Add your items to cart</h4> 
//         </div>
//     )
        
    
// }

//     </div>
//  </div>
 
// <div className="py-4 mt-4  justify-center items-center">
//     <h1 className="text-center text-purple-700 text-3xl underline font-semibold ">Transaction History</h1>
//     <table className="px-4 bg-white justify-center gap-4 text-center gap-4 mx-16 mt-6 border border-purle-700 overflow-hidden border-collapse rounded-lg">
//      <thead className="text-purple-900    font-semibold text-1xl text-center border-solid border-purple-700">

// <tr>
// <th>S/N</th>
// <th>Name</th>
// <th>Amount</th>n
// <th>Time</th>
// <th>Bank Account Paid to;</th>
// <th>Items Bought</th>
// <th>Status</th>
// </tr>

//      </thead>

//      <tbody>
//   {transactions.map((trans) => (
//     <tr className=" border-solid border-purple-700">
// <td className="text-center p-2 font-bold text-purple-700 text-1xl border border-solid border-purple-700">{trans.id}</td>
// <td className="text-center p-2 font-semibold border border-purple-700">{trans.name}</td>
// <td className="text-center p-2 font-semibold border border-purple-700"> ${trans.amount.toLocaleString()}</td>
// <td className="text-center p-2 font-semibold text-red-400 border border-purple-700">{trans.time}</td>
// <td className="text-center p-2 text-green-800 font-semibold border border-purple-700">{trans.payedTo}</td>
// <td className="text-center p-2 text-blue-700 font-semibold border border-purple-700"> {trans.itemBought}</td>
// <td className="text-center border border-purple-700 p-2"> 
//     <span className={`px-3 py-1 rounded-full text-[10px] font-semibold  ${statusStyle[trans.status]}`}>
// {trans.status} </span></td>
//     </tr>
//   ))}

//      </tbody>

     

// </table>
// </div>


//          </div>
//     )
// }
// export default Dashboard;










import React, { useState, useContext } from "react";
import { ThemeContext } from "../Globalcontext";

const transactions =[

{name: "Adeoti Moshood", amount: 53050,  time: "04:59", payedTo: "Moniepoint Account", itemBought:  "Mercedez EGB SUV", status: "Successful", id: 1},
{name: "Oladimeji Hassan", amount:  41500  ,  time: "05:12", payedTo: "Palmapy Business Account", itemBought: "Mercedez GLA SUV" , status: "Successful", id: 2},
{name: "Olaoye Temiloluwa", amount: 42750 ,  time: "05:17", payedTo: "UBA company Account ", itemBought: "Mercedez CLA COUPE" , status: "Pending", id: 3},
{name: "Adeoti Rauf", amount: 41500 ,  time: "04:19", payedTo: "First BANK ACCOUNT", itemBought:"Mercedez GLA SUV",   status: "Pending", id: 4},
{name: "Dawodu Gbolahan", amount: 68050 ,  time: "04:34", payedTo: "Zenith Bank", itemBought: "Mercedez CLE Cabriolet", status: "Cancelled", id: 5},
{name: "Adewole Daniel", amount: 32000 ,  time: "04:40", payedTo: "Fidelity BAnk PLC", itemBought: "Mercedez 4 MATIC BENZ", status: "Pending", id: 6},
{name: "Abdusalam Abdullah", amount: 42021,  time: "04:47", payedTo: "MoniePoint Account", itemBought: "Mercedez GLE 350", status: "Successful", id: "7"},
]


const cards = [
  { name: "Mercedez EGB SUV", price: 53050, images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/eqb-class/all-vehicles/2024-EQB250-SUV-AVP-DR.png", desc: "Naturally resourceful", rate: "⭐⭐⭐⭐⭐" },
  { name: "Mercedez GLA SUV", price: 41500, images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/gla-class/all-vehicles/2024-GLA-SUV-AVP-DR.png", desc: "Small footprint big impression", rate: "⭐⭐⭐⭐⭐" },
  { name: "Mercedez CLA SEDANS", price: 45670, images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my26/cla-sedan/all-vehicles/2026-CLA-SEDAN-AVP-DR.png", desc: "Beyond intelligent within reach", rate: "⭐⭐⭐⭐⭐" },
  { name: "Mercedez CLA COUPE", price: 42750, images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cla-class/all-vehicles/2024-CLA-250-4M-COUPE-AVP-DR.png", desc: "Seduction, style and substance", rate: "⭐⭐⭐⭐⭐" },
  { name: "Mercedez AMG GT 4-door Coupe", price: 42750, images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/cla-class/all-vehicles/2024-CLA-250-4M-COUPE-AVP-DR.png", desc: "Practically exotic", rate: "⭐⭐⭐⭐⭐" },
  { name: "Mercedez CLE Cabriolet", price: 68050, images: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my25/cle-class/cle-cab/all-vehicles/2025-CLE300-4M-CAB-AVP-DR.png", desc: "Solar flair", rate: "⭐⭐⭐⭐⭐" },
];
const statusStyle = {
  "Successful": "bg-green-400 rounded-lg text-white text-center border border-white font-semibold",
  "Cancelled": "bg-red-700 rounded-lg text-white text-center border border-white font-semibold",
  "Pending": "bg-yellow-500 rounded-lg text-white text-center border border-white font-semibold",
};

function Dashboard() {
  const [cart, setCart] = useState([]);
  const { theme } = useContext(ThemeContext); 
  
function addToCart(product) {
  const exists = cart.find((items) => items.name === product.name);

  if (exists) {
    setCart(cart.map((items) =>
      items.name === product.name
        ? { ...items, quantity: items.quantity + 1 }
        : items
    ));
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
}
  return (
    <div className={`h-full w-full ${theme === "dark" ? "bg-gray-900" : "bg-blue-400"}`}>

 
      <div className={`h-[15%] rounded-lg py-4 ${theme === "dark" ? "bg-gray-800" : "bg-purple-700"}`}>
        <h1 className="text-center text-white font-bold text-3xl">Hello! Moshood Adeoti</h1>
        <p className="px-[5%] text-center text-white text-2xl mt-4 font-semibold">Welcome to your dashboard 👋👋👋</p>
      </div>

     
      <div className={`px-6 py-6 mt-6 rounded-lg ${theme === "dark" ? "bg-gray-800" : "bg-purple-700"}`}>
        <div className="grid grid-cols-3 gap-2 px-2 mt-6 rounded-lg">
          {cards.map((items) => (
            <div key={items.name} className={`px-2 items-center ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white"}`}>
              <img src={items.images} alt="" className="hover:scale-105 transition-transform duration-700 ease-in-out" />
              <h3 className={`text-center font-semibold ${theme === "dark" ? "text-blue-300" : "text-purple-700"}`}>{items.name}</h3>
              <p className={`text-center font-semibold ${theme === "dark" ? "text-gray-300" : "text-black"}`}>{items.desc}</p>
              <p className="text-xl text-center font-bold text-red-500">${items.price.toLocaleString()}</p>
              <p className="text-center">{items.rate}</p>
              <button onClick={() =>addToCart(items)} className="p-2 bg-yellow-400 rounded-md text-white text-center font-semibold ml-[70px] w-[160px] mt-2 mb-4">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart */}
      <div className={`mt-6 ${theme === "dark" ? "bg-gray-800" : "bg-purple-700"}`}>
        <h1 className="text-center text-white text-3xl">Cart <span className="bg-yellow-500 rounded-[100%] px-3 py-0 text-center text-2xl">{cart.length}</span></h1>
        <div className="grid grid-cols-4 gap-2 px-2 mt-6 rounded-lg">
          {cart.length > 0 ? (

            cart.map((items) => (
  <div key={items.name} className="mb-6 ">
    <img src={items.images} alt="" className="hover:scale-105 transition-transform duration-700 ease-in-out" />
    <h2 className={`text-center ${theme === "dark" ? "text-white" : "text-white"}`}>{items.name}</h2>
    <p className={`text-center ${theme === "dark" ? "text-white" : "text-white"}`}>${items.price.toLocaleString()}</p>
    <p className="text-center text-yellow-400 font-bold">Qty: {items.quantity}</p>
  </div>
))
          ) : (
            <div>
              <h4 className="text-center text-white font-semibold text-2xl">
                Your cart is empty! Please add items to cart
              </h4>
            </div>
          )}
        </div>
      </div>
 
      <div className="py-4 mt-4 justify-center items-center">
        <h1 className={`text-center text-3xl underline font-semibold ${theme === "dark" ? "text-blue-300" : "text-purple-700"}`}>
          Transaction History
        </h1>
        <table className={`px-4 justify-center text-center mx-16 mt-6 border overflow-hidden border-collapse rounded-lg w-[90%]
          ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white border-purple-700"}`}>
          <thead className={`font-semibold text-center ${theme === "dark" ? "text-blue-300" : "text-purple-900"}`}>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Time</th>
              <th>Bank Account Paid to</th>
              <th>Items Bought</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trans) => (
              <tr key={trans.id} className={`border-solid ${theme === "dark" ? "border-gray-600" : "border-purple-700"}`}>
                <td className={`text-center p-2 font-bold text-xl border ${theme === "dark" ? "text-blue-300 border-gray-600" : "text-purple-700 border-purple-700"}`}>{trans.id}</td>
                <td className={`text-center p-2 font-semibold border ${theme === "dark" ? "border-gray-600" : "border-purple-700"}`}>{trans.name}</td>
                <td className={`text-center p-2 font-semibold border ${theme === "dark" ? "border-gray-600" : "border-purple-700"}`}>${trans.amount.toLocaleString()}</td>
                <td className={`text-center p-2 font-semibold border text-red-400 ${theme === "dark" ? "border-gray-600" : "border-purple-700"}`}>{trans.time}</td>
                <td className={`text-center p-2 font-semibold border text-green-400 ${theme === "dark" ? "border-gray-600" : "border-purple-700"}`}>{trans.payedTo}</td>
                <td className={`text-center p-2 font-semibold border text-blue-400 ${theme === "dark" ? "border-gray-600" : "border-purple-700"}`}>{trans.itemBought}</td>
                <td className={`text-center border p-2 ${theme === "dark" ? "border-gray-600" : "border-purple-700"}`}>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-semibold ${statusStyle[trans.status]}`}>
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