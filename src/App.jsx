import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Message from "./pages/Message";
import AboutPage from "./pages/AboutPage";
import ClientsPage from "./pages/ClientsPage";
import ScrollToTop from "./components/ScrollToTop";
import ServicesForm from "./pages/ServicesForm";
import Blog from "./pages/Blog";
import Reviews from "./pages/Reviews";
import Portfolio from "./pages/Portfolio";
// import PortfolioWork from "./pages/PortfolioWork";

function App() {
  return (
    <>
      <div className="w-full flex justify-center fixed top-0 lg:top-4 z-50">
        <Navbar />
      </div>
    <ScrollToTop/>
      <div className="pt-12">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/message" element={<Message />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/all-clients" element={<ClientsPage />} />
          <Route path="/services-form" element={<ServicesForm />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>

     
    </>
  );
}

export default App;
