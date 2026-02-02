import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { translations } from "../i18n";
import TodoApp from "../projects/TodoApp";
import DashboardSales from "../projects/DashboardSales";

interface Props {
  lang: "fr" | "en";
}

interface Project {
  title: string;
  stack: string;
  description: string;
  github?: string;
  demo?: string;
}

export default function Projects({ lang }: Props) {
  const projects = translations[lang].projectsList as Project[];
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-4" id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">
          {translations[lang].projects}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => {
            const isOpen = openProject === proj.title;

            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              >
                {/* TITRE CLIQUABLE */}
                <h3
                  onClick={() =>
                    setOpenProject(isOpen ? null : proj.title)
                  }
                  className="text-xl font-semibold mb-2 cursor-pointer hover:text-blue-600 transition"
                >
                  {proj.title}
                </h3>

                <p className="text-sm text-gray-500 mb-3">
                  <strong>Stack :</strong> {proj.stack}
                </p>

                <p className="text-gray-700 dark:text-gray-300">
                  {proj.description}
                </p>

                <div className="mt-4 flex gap-3">
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
                    >
                      Live
                    </a>
                  )}
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      className="px-4 py-2 border rounded-lg text-sm"
                    >
                      Code
                    </a>
                  )}
                </div>

                {/* TODO APP */}
                <AnimatePresence>
                  {isOpen && proj.title === "Todo App Pro" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 overflow-hidden"
                    >
                      <TodoApp />
                    </motion.div>
                  )}

                  {isOpen && proj.title === "Dashboard de ventes" && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="mt-6 overflow-hidden"
    >
      <DashboardSales />
    </motion.div>
  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
