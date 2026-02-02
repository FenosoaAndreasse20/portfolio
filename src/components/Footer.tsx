import { translations } from "../i18n";

interface Props {
  lang: "fr" | "en";
}

export default function Footer({ lang }: Props) {
  return (
    <footer className="bg-white dark:bg-gray-800 py-6 mt-12">
      <div className="max-w-5xl mx-auto text-center text-gray-700 dark:text-gray-300">
        &copy; {new Date().getFullYear()} Fenosoa Andreasse. {translations[lang].footer}
      </div>
    </footer>
  );
}
