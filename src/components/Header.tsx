import profilePic from "../assets/PhotoHeader.png";
import { translations } from "../i18n";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface Props {
  lang: "fr" | "en";
}

export default function Header({ lang }: Props) {
  return (
    <header className="min-h-screen flex items-center px-6" >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center w-full h-screen">

        {/* TEXTE À GAUCHE */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-sm uppercase tracking-widest text-blue-600">
            Hello 👋
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            ANDRINOMENJANAHARY <br />
            <span className="text-blue-600">Fenosoa Andreasse</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            {translations[lang].headerSubtitle}
          </p>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            {translations[lang].headerDescription}
          </p>

          {/* ICÔNES */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl pt-4">
            <a
              href="https://github.com/FenosoaAndreasse20"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/fenosoa-andreasse-andrinomenjanahary-442372283"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:fenosoa.andreasse@gmail.com"
              className="hover:text-blue-600 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* IMAGE À DROITE – GRANDE, SANS FOND */}
        <div className="flex justify-center mx-auto md:justify-end h-full ">
          <img
            src={profilePic}
            alt="Fenosoa Andreasse"
            className="w-auto object-cover"
          />
        </div>

      </div>
    </header>
  );
}
