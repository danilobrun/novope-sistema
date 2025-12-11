import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import RegisterContact from "./pages/contact/RegisterContact";

const RoutesPages = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/register-contact" element={<RegisterContact />}/>
        </Routes>
    </>
  )
}

export default RoutesPages
