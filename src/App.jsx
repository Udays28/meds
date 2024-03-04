import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Message from "./pages/Message";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full flex justify-center fixed top-0 lg:top-4 z-50">
        <Navbar />
      </div>

      <div className="pt-12">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>

      <Footer/>
    </>
  );
}

export default App;
