import { TbBrandMercedes } from "react-icons/tb";
import { LuBadgeHelp, LuLayoutDashboard } from "react-icons/lu";
import { allPaths } from "../paths";
import { CgProfile } from "react-icons/cg";
import { CiShop } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import { useContext } from "react";
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
  return (
    <div className={`h-full ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>

      <nav className={`w-[15%] px-4 h-screen fixed ${theme === "dark" ? "bg-gray-800" : "bg-purple-700"}`}>

        <div className="flex gap-4 justify-center mt-6">
          <h1 className="text-[24px] font-bold text-white">Mercedez</h1>
          <TbBrandMercedes className="size-[25px] mt-2 text-white" />
        </div>

        <div className="mt-8">
          {navs.map((items) => (
            <NavLink
              key={items.name}
              to={items.to}
              end={items.to === "/"}
              className={({ isActive }) =>
                `items-center border border-black rounded-lg px-2 py-2 mt-4 text-center flex gap-2 cursor-pointer
                ${isActive ? "bg-blue-600 text-white" : 
                  theme === "dark" 
                    ? "bg-gray-700 text-white hover:bg-gray-600" 
                    : "bg-white text-purple-900 hover:bg-blue-400"
                }`}
            >
              <span>{items.name}</span>
              <span className="text-2xl">{items.Icon}</span>
            </NavLink>
          ))}
        </div>

        <ThemeToggle />
      </nav>

      <main className={`ml-56 flex-1 p-6 px-0 min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <Outlet />
      </main>

    </div>
  );
}

export default SideNavbar;