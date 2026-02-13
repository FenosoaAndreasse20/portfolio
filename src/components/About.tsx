import { translations } from "../i18n";
import aboutPic from "../assets/PhotoAboutMe.png";

interface Props {
  lang: "fr" | "en";
}

export default function About({ lang }: Props) {
  return (
    <section
      id="about"
      className="bg-white dark:bg-gray-800 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Photo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={aboutPic}
            alt="About Fenosoa"
            className="w-64 sm:w-72 md:w-80 h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Texte */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            {translations[lang].aboutTitle}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {translations[lang].aboutText}
          </p>
        </div>

      </div>
    </section>
  );
}
