import { translations } from "../i18n";

interface Props {
  lang: "fr" | "en";
}

export default function Contact({ lang }: Props) {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-2">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{translations[lang].contact}</h2>
        <p className="text-gray-700 dark:text-gray-300"><strong>{translations[lang].email}:</strong> andrinomenjanaharyfenosoa@gmail.com</p>
        <p className="text-gray-700 dark:text-gray-300"><strong>{translations[lang].location}:</strong> Antananarivo, Madagascar</p>
        <p className="text-gray-700 dark:text-gray-300"><strong>GitHub:</strong> github.com/FenosoaAndreasse20</p>
        <p className="text-gray-700 dark:text-gray-300"><strong>LinkedIn:</strong> linkedin.com/in/fenosoa-andreasse-andrinomenjanahary</p>
      </div>
    </section>
  );
}
