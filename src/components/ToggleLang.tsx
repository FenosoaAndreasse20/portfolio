import React from "react";

interface Props {
  lang: "fr" | "en";
  toggleLang: () => void;
}

export default function ToggleLang({ lang, toggleLang }: Props) {
  return (
    <button
      onClick={toggleLang}
      className="fixed top-4 left-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-lg hover:scale-110 transition z-50"
    >
      {lang === "fr" ? "EN" : "FR"}
    </button>
  );
}
