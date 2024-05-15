import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Webdesigning from "./pages/WebDesigning/Webdesigning";
import Navbar from "./component/Home/Navbar";
import Footer from "./component/Home/Footer";
import WebDevelopment from "./pages/WebDevelopment/WebDevelopment";
import AboutUs from "./pages/AboutUs/AboutUs";
import MobileDevelopment from "./pages/MobileDevelopment/MobileDevelopment";
import EcommerceDevelopment from "./pages/EcommerceDevelopment/EcommerceDevelopment";
import WebsiteTyes from "./pages/WebsiteTyes/WebsiteTyes";
import ContactUs from "./pages/ContactUs/ContactUs";
import Career from "./pages/Career/Career";
import Widget from "./component/widget/Widget";
import ScrollToTop from "./component/Home/Scrollup";
import FormPopup from "./component/FormPopup/FormPopup";
import Whatsapp from "./component/whatsapp/Whatsapp";


function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/web-designing" element={<Webdesigning />} />
          <Route exact path="/web-development" element={<WebDevelopment />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route
            exact
            path="/mobile-development"
            element={<MobileDevelopment />}
          />
          <Route
            exact
            path="/ecommerce-development"
            element={<EcommerceDevelopment />}
          />
          <Route exact path="/website-types" element={<WebsiteTyes />} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/career" element={<Career />} />
        </Routes>

        <Footer />

        {/* {{{{{{{{{{{Message and call us widget}}}}}}}}}}} */}
        <Widget />
        {/* {{{{{{{{{{{Contact us form pop up}}}}}}}}}}} */}
        <FormPopup />
        {/* {{{{{{{{{{{Whatsapp widget}}}}}}}}}}} */}
        <Whatsapp />
      </Router>
    </>
  );
}

export default App;
