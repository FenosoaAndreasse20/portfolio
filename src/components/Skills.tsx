import React from "react";
import { motion } from "framer-motion";
import { translations } from "../i18n";

interface Props {
  lang: "fr" | "en";
}

export default function Skills({ lang }: Props) {
  const frontend = ["React.js", "JavaScript / TypeScript", "Tailwind CSS", "Next.js"];
  const backend = ["Node.js", "API REST", "PHP (bases)", "Java", "Python"];
  const databases = ["MySQL", "PostgreSQL", "MongoDB (notions)"];

  const renderList = (title: string, items: string[]) => (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{title}</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="bg-white dark:bg-gray-800 py-12 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {renderList(translations[lang].frontend, frontend)}
        {renderList(translations[lang].backend, backend)}
        {renderList(translations[lang].databases, databases)}
      </div>
    </section>
  );
}
