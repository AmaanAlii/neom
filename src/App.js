import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Layout/Navbar/Navbar";
import Homepage from "./Component/Pages/Homepage/Homepage";
import ProductPage from "./Component/Pages/ProductPage/ProductPage";
import SingleProductPage from "./Component/Pages/SingleProductPage/SingleProductPage";
import ContactUs from "./Component/Pages/ContactUs/ContactUs";
import UserProfile from "./Component/Pages/UserProfile/UserProfile";
import LoginPage from "./Component/Pages/LoginPage/LoginPage";
import SignupPage from "./Component/Pages/SignupPage/SignupPage";
import AboutUs from "./Component/Pages/AboutUs/AboutUs";
import Gallery from "./Component/Pages/Gallery/Gallery";
import PrivacyPolicy from "./Component/Pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./Component/Pages/TermsOfUse/TermsOfUse";
import SalesAndRefunds from "./Component/Pages/SalesAndRefunds/SalesAndRefunds";
import Legal from "./Component/Pages/Legal/Legal";
import Cart from "./Component/Pages/Cart/Cart";
import AddressConfirmation from "./Component/Pages/Cart-AddressConfirmation/AddressConfirmation";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/singleproduct" element={<SingleProductPage />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsofuse" element={<TermsOfUse />} />
          <Route path="/salesandrefunds" element={<SalesAndRefunds />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/addressconfirmation"
            element={<AddressConfirmation />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
