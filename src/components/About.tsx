import { translations } from "../i18n";

interface Props {
  lang: "fr" | "en";
}

export default function About({ lang }: Props) {
  return (
    <section className="bg-white dark:bg-gray-800 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">{translations[lang].aboutTitle}</h2>
        <p className="text-gray-700 dark:text-gray-300">{translations[lang].aboutText}</p>
      </div>
    </section>
  );
}
