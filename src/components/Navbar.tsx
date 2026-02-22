import { useState } from "react";
import ToggleLang from "./ToggleLang";
import ToggleDarkMode from "./ToggleDarkMode";
import { BsThreeDots } from "react-icons/bs";

interface Props {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  lang: "fr" | "en";
  setLang: (val: "fr" | "en") => void;
}

function Navbar({ darkMode, setDarkMode, lang, setLang }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  const PopupContent = () => (
    <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-xl shadow-lg p-4 space-y-4 z-50">
      
      {/* LANGUAGE */}
      <div>
        <p className="text-sm font-semibold mb-2">Language</p>
        <div className="flex gap-2">
          <button
            onClick={() => setLang("fr")}
            className={`flex-1 px-3 py-1 rounded-md border transition ${
              lang === "fr"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            🇫🇷 FR
          </button>
          <button
            onClick={() => setLang("en")}
            className={`flex-1 px-3 py-1 rounded-md border transition ${
              lang === "en"
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            🇬🇧 EN
          </button>
        </div>
      </div>

      {/* THEME */}
      <div>
        <p className="text-sm font-semibold mb-2">Theme</p>
        <div className="flex gap-2">
          <button
            onClick={() => setDarkMode(false)}
            className={`flex-1 px-3 py-1 rounded-md border transition ${
              !darkMode
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            ☀️ Light
          </button>
          <button
            onClick={() => setDarkMode(true)}
            className={`flex-1 px-3 py-1 rounded-md border transition ${
              darkMode
                ? "bg-gray-200 dark:bg-gray-700"
                : "hover:bg-gray-100 dark:hover:bg-gray-600"
            }`}
          >
            🌙 Dark
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo / Titre */}
        <div className="text-xl font-bold">Portfolio</div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-6">
          <a href="#header"><li className="hover:text-gray-300 cursor-pointer">Home</li></a>
          <a href="#about"><li className="hover:text-gray-300 cursor-pointer">About</li></a>
          <a href="#projects"><li className="hover:text-gray-300 cursor-pointer">Project</li></a>
          <a href="#techno"><li className="hover:text-gray-300 cursor-pointer">Techno</li></a>
          <a href="#contact"><li className="hover:text-gray-300 cursor-pointer">Contact</li></a>
        </ul>

        {/* Bouton Settings desktop */}
        <div className="hidden md:block relative">
          <button
            onClick={togglePopup}
            className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-lg transition"
          >
            <BsThreeDots />
          </button>
          {isPopupOpen && <PopupContent />}
        </div>

        {/* Hamburger mobile */}
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

          {/* Popup mobile */}
<div className="relative mt-4">
  {isPopupOpen && <PopupContent />}
</div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;