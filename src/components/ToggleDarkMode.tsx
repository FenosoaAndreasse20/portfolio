import { FaSun, FaMoon } from "react-icons/fa";

interface Props {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function ToggleDarkMode({ darkMode, toggleDarkMode }: Props) {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg hover:scale-110 transition z-50"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}
