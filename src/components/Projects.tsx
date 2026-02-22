import { translations } from "../i18n";
import ProjectCard from "./ProjectCard";

import parc1 from "../assets/parc-1.png";
import parc2 from "../assets/parc-2.png";
import parc3 from "../assets/parc-3.png";

import gafi1 from "../assets/gafi-1.png";
import gafi2 from "../assets/gafi-2.png";
import gafi3 from "../assets/gafi-3.png";

import Portfolio1 from "../assets/PortfolioHeader.png";
import Portfolio2 from "../assets/PortfolioAboutMe.png";
import Portfolio3 from "../assets/PortfolioProjects.png";
import Portfolio4 from "../assets/PortfoliotechnoetContact.png";



interface Props {
  lang: "fr" | "en";
}

export default function Projects({ lang }: Props) {
  const projects = [
    {
      title: "Gestion de parc informatique",
      description:
        "Application de suivi et de gestion du parc informatique avec visualisation des équipements et indicateurs.",
      images: [parc1, parc2, parc3],
    },
    {
      title: "Suivi de conformité – Recommandations GAFI",
      description:
        "Dashboard de suivi et de mise à jour de la conformité aux recommandations GAFI.",
      images: [gafi1, gafi2, gafi3],
    },
    {
      title: "Mon Portfolio",
      description:
            "Mon site personnel qui présente mes projets, mes compétences et mon parcours en développement web.",
      images: [Portfolio1, Portfolio2, Portfolio3, Portfolio4],
    }
  ];

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {translations[lang].projects}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
