import { motion } from "framer-motion";
import { translations } from "../i18n";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaPhp,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

interface Props {
  lang: "fr" | "en";
}

export default function Skills({ lang }: Props) {

  const skills = [
    { name: "React", icon: <FaReact className="text-sky-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-600" /> },
    { name: "Java", icon: <FaJava className="text-red-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  ];

  return (
    <section
      id="techno"
      className="bg-white dark:bg-gray-800 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white"
        >
          {translations[lang].skills || "Technologies"}
        </motion.h2>

        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center gap-2 text-4xl text-gray-700 dark:text-gray-200 cursor-pointer"
            >
              {skill.icon}
              <span className="text-sm">{skill.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}  

