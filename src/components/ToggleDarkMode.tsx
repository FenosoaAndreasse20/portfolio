import { FaSun, FaMoon } from "react-icons/fa";

interface Props {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function ToggleDarkMode({ darkMode, setDarkMode }: Props) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex-1 px-3 py-1 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center justify-center gap-2"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      <span>{darkMode ? "Light" : "Dark"}</span>
    </button>
  );
}