import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import PlayGround from "./pages/PlayGround/PlayGround";
import TEstPG from "./pages/PlayGround/TEstPG";


export default function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {

      setShowNavBar(false);
    } else {

      setShowNavBar(true);
    }
    setIsTopOfPage(currentScrollY === 0);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <BrowserRouter>
      <div
        className={`fixed top-0 w-full z-50 transition-transform duration-300 ${
          showNavBar ? "translate-y-0" : "-translate-y-full"
        } `}
      >
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/PlayGround" element={<TEstPG /> } />
      </Routes>
    </BrowserRouter>
  )
}