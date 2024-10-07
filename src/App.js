import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import NewPage from "./Pages/NewPage/NewPage";
import MenPage from "./Pages/MenPage/MenPage";
import WomenPage from "./Pages/WomenPage/WomenPage";
import AccessoriesPage from "./Pages/AccessoriesPage/AccessoriesPage";
import SalePage from "./Pages/SalePage/SalePage";
import OurStoryPage from "./Pages/OurStoryPage/OurStoryPage";
import RewievsPage from "./Pages/RewievsPage/RewievsPage";
import ThePlaybook from "./Pages/ThePlaybook/ThePlaybook";
import ChildPlaybook from "./Pages/ChildPlaybook/ChildPlaybook";
import MilitaryPage from "./Pages/MilitaryPage/MilitaryPage";
import NeedHelpPage from "./Pages/NeedHelpPage/NeedHelpPage";
import SizeGuide from "./Pages/SizeGuide/SizeGuide";
import ShippingPage from "./Pages/ShippingPage/ShippingPage";
import Accessibility from "./Pages/Accessibility/Accessibility";
import ReferFriendPage from "./Pages/ReferFriendPage/ReferFriendPage";
import ReturnsPage from "./Pages/ReturnsPage/ReturnsPage";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import NeedHelp from "./Components/NeedHelp/NeedHelp";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ProfilPage from "./Pages/ProfilPage/ProfilPage";

function App() {
  return (
    <Router>
      <div className="navmesafe">
        <Navbar />
      </div>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/our-story" element={<OurStoryPage />} />

        <Route path="/needhelp" element={<NeedHelpPage />} />

        <Route path="/reviews" element={<RewievsPage />} />

        <Route path="/military" element={<MilitaryPage />} />
        <Route path="/sizeguide" element={<SizeGuide />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilPage />} />

        <Route path="/theplaybook" element={<ThePlaybook />} />

        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/referfriend" element={<ReferFriendPage />} />

        <Route path="/theplaybook/:id" element={<ChildPlaybook />} />

        <Route path="returns" element={<ReturnsPage />} />

        <Route path="/product/:sebui" element={<ProductDetail />} />
      </Routes>

      <NeedHelp />

      <Footer />
    </Router>
  );
}

export default App;
