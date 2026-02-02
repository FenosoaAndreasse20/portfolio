import profilePic from "../assets/imagePro.jpg";
import { translations } from "../i18n";

interface Props {
  lang: "fr" | "en";
}

export default function Header({ lang }: Props) {
  return (
    <header className="p-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        <img
          src={profilePic}
          alt="Fenosoa Andreasse"
      className="w-60 sm:w-72 md:w-80 h-auto rounded-md shadow-lg"
        />
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight break-words">
          ANDRINOMENJANAHARY Fenosoa Andreasse
          </h1>
    <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
          {translations[lang].headerSubtitle}
          </p>
    <p className="mt-1 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400">
          {translations[lang].headerDescription}
          </p>

        {/* GitHub & LinkedIn */}
        <div className="flex gap-4 mt-4">
          <a
            href="https://github.com/FenosoaAndreasse20"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/fenosoa-andreasse-andrinomenjanahary-442372283"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
