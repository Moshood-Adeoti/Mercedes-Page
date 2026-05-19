import SideNavbar from "./pages/SideNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile/Profile";
import MarketPlace from "./pages/Market/MarketPlace";
import Settings from "./pages/Settings/Settings";
import GetHelp from "./pages/HelpCenter/GetHelp";
import Order from "./pages/Market/Order";
import About from "./pages/HelpCenter/About";
import Globalcontext from "./Globalcontext";


export default function App() {
  return (
    <Globalcontext>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<SideNavbar />}>         
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="market" element={<MarketPlace />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<GetHelp />} />
          <Route path="order" element={<Order />} />
          <Route path="about" element={<About />} />
        </Route>                                          
      </Routes>
    </BrowserRouter>
    </Globalcontext>
  );
}