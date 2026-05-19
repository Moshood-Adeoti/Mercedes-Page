import { TbBrandMercedes } from "react-icons/tb";
import { LuBadgeHelp, LuLayoutDashboard } from "react-icons/lu";
import { allPaths } from "../paths";
import { CgProfile } from "react-icons/cg";
import { CiShop } from "react-icons/ci";
import { IoMdSettings, IoMdMenu, IoMdClose } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import { useContext, useState } from "react";
import { ThemeContext } from "../Globalcontext";

const navs = [
  { name: "Dashboard", Icon: <LuLayoutDashboard />, to: allPaths.dashboard },
  { name: "Profile", Icon: <CgProfile />, to: allPaths.profile },
  { name: "Market Place", Icon: <CiShop />, to: allPaths.market },
  { name: "Settings", Icon: <IoMdSettings />, to: allPaths.settings },
  { name: "Get help", Icon: <LuBadgeHelp />, to: allPaths.help },
  { name: "Order", Icon: <MdOutlineShoppingBag />, to: allPaths.order },
  { name: "About", Icon: <FcAbout />, to: allPaths.about },
];

function SideNavbar() {

  const { theme } = useContext(ThemeContext);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className={`min-h-screen ${
      theme === "dark"
        ? "bg-gray-900 text-white"
        : "bg-gray-100 text-black"
    }`}>
 

      <div className={`md:hidden flex items-center justify-between px-4 py-4 shadow-md
        ${theme === "dark" ? "bg-gray-800" : "bg-purple-700"}
      `}>

        <div className="flex items-center gap-2">
          <TbBrandMercedes className="text-white text-3xl" />
          <h1 className="text-white font-bold text-xl">
            Mercedes
          </h1>
        </div>

        <button onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? (
            <IoMdClose className="text-white text-3xl" />
          ) : (
            <IoMdMenu className="text-white text-3xl" />
          )}
        </button>
      </div>

      

      {openMenu && (
        <div className={`md:hidden fixed top-0 left-0 w-[75%] h-screen z-50 p-5
          ${theme === "dark" ? "bg-gray-800" : "bg-purple-700"}
        `}>

          <div className="flex items-center justify-between mb-8">

            <div className="flex gap-2 items-center">
              <TbBrandMercedes className="text-white text-3xl" />
              <h1 className="text-white text-2xl font-bold">
                Mercedes
              </h1>
            </div>

            <IoMdClose
              className="text-white text-3xl cursor-pointer"
              onClick={() => setOpenMenu(false)}
            />
          </div>

          <div className="space-y-4">

            {navs.map((items) => (
              <NavLink
                key={items.name}
                to={items.to}
                onClick={() => setOpenMenu(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl transition-all
                  ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : theme === "dark"
                      ? "bg-gray-700 text-white"
                      : "bg-white text-purple-900"
                  }`
                }
              >

                <span>{items.name}</span>

                <span className="text-2xl">
                  {items.Icon}
                </span>

              </NavLink>
            ))}

          </div>

          <div className="mt-8">
            <ThemeToggle />
          </div>

        </div>
      )}

      {/* DESKTOP SIDEBAR */}

      <nav className={`hidden md:block w-[250px] px-4 h-screen fixed
        ${theme === "dark" ? "bg-gray-800" : "bg-purple-700"}
      `}>

        <div className="flex gap-3 justify-center mt-6 items-center">
          <h1 className="text-[24px] font-bold text-white">
            Mercedes
          </h1>

          <TbBrandMercedes className="size-[28px] text-white" />
        </div>

        <div className="mt-8">

          {navs.map((items) => (
            <NavLink
              key={items.name}
              to={items.to}
              end={items.to === "/"}
              className={({ isActive }) =>
                `items-center rounded-lg px-3 py-3 mt-4 flex justify-between
                transition-all duration-200
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : theme === "dark"
                    ? "bg-gray-700 text-white hover:bg-gray-600"
                    : "bg-white text-purple-900 hover:bg-blue-400"
                }`
              }
            >

              <span>{items.name}</span>

              <span className="text-2xl">
                {items.Icon}
              </span>

            </NavLink>
          ))}

        </div>

        <div className="mt-8">
          <ThemeToggle />
        </div>

      </nav>

       

      <main className="md:ml-[250px] p-4 md:p-6 min-h-screen">
        <Outlet />
      </main>

    </div>
  );
}

export default SideNavbar;