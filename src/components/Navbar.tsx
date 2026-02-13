import { useState } from 'react';
import ToggleLang from './ToggleLang';
import { BsThreeDots } from "react-icons/bs";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [lang, setLang] = useState<"fr" | "en">("fr");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <nav className="bg-gray-800 top-0 text-white p-4 absolute sticky z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou titre */}
        <div className="text-xl font-bold">Portfolio</div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6">
          <a href="#header"><li className="hover:text-gray-300 cursor-pointer">Home</li></a>
          <a href="#about"><li className="hover:text-gray-300 cursor-pointer">About</li></a>
          <a href="#projects"><li className="hover:text-gray-300 cursor-pointer">Project</li></a>
          <a href="#techno"><li className="hover:text-gray-300 cursor-pointer">Techno</li></a>
          <a href="#contact"><li className="hover:text-gray-300 cursor-pointer">Contact</li></a>
        </ul>

        {/* Bouton Settings avec popup */}
        <div className="hidden md:block relative">
          <button
            onClick={togglePopup}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
          >
            <BsThreeDots/>
          </button>
          
          {isPopupOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg z-10">
              <div className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                <ToggleLang
                  lang={lang}
                  toggleLang={() => setLang(lang === "fr" ? "en" : "fr")}
                />
              </div>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                Option 2
              </button>
            </div>
          )}
        </div>

        {/* Bouton hamburger (mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
           <a href="#header"><li className="hover:text-gray-300 cursor-pointer">Home</li></a>
          <a href="#about"><li className="hover:text-gray-300 cursor-pointer">About</li></a>
          <a href="#projects"><li className="hover:text-gray-300 cursor-pointer">Project</li></a>
          <a href="#techno"><li className="hover:text-gray-300 cursor-pointer">Techno</li></a>
          <a href="#contact"><li className="hover:text-gray-300 cursor-pointer">Contact</li></a>
        </ul>
          
          {/* Settings popup en mobile */}
          <div className="mt-4 relative">
            <button
              onClick={togglePopup}
              className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition"
            >
              <BsThreeDots/>
            </button>
            
            {isPopupOpen && (
              <div className="mt-2 bg-white text-gray-800 rounded shadow-lg">
                <div className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  <ToggleLang
                    lang={lang}
                    toggleLang={() => setLang(lang === "fr" ? "en" : "fr")}
                  />
                </div>
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Option 2
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;