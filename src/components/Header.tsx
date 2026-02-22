import profilePic from "../assets/PhotoHeader.jpg";
import { translations } from "../i18n";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface Props {
  lang: "fr" | "en";
}

export default function Header({ lang }: Props) {
  return (
    <>
      <header  id="header" className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-6 lg:gap-10 gap-10 justify-center items-center w-full">
          {/* TEXTE À GAUCHE */}
          <div className=" text-center md:text-left">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                ANDRINOMENJANAHARY <br />
              <span>Fenosoa Andreasse</span>
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
                href="https://linkedin.com/in/fenosoa-andreasse-andrinomenjanahary"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:andrinomenjanaharyfenosoa@gmail.com"
                className="hover:text-blue-600 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* IMAGE À DROITE */}
          <div className="flex justify-center md:justify-end">
      <img
        src={profilePic}
        alt="Fenosoa Andreasse"
        className="w-52 sm:w-64  md:w-72 lg:w-96 h-auto object-cover rounded-2xl shadow-lg"
      />
    </div>
        </div>
      </header>
    </>
  );
}
