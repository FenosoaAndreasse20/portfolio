import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToggleDarkMode from "./components/ToggleDarkMode";
import ToggleLang from "./components/ToggleLang";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<"fr" | "en">("fr");

  // ✅ ICI LA MAGIE
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-500 scroll-smooth">
      <div className="flex justify-end items-center gap-4 p-4 max-w-5xl mx-auto">
        <ToggleLang
          lang={lang}
          toggleLang={() => setLang(lang === "fr" ? "en" : "fr")}
        />
        <ToggleDarkMode
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />
      </div>

      <Header lang={lang} />
      <main>
        <About lang={lang} />
        <Projects lang={lang} />
        <Skills lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
