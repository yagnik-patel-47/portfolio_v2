import { FC } from "react";
import projects from "../workData";
import WorkCard from "./WorkCard";
import { motion } from "framer-motion";

const Work: FC = () => {
  return (
    <motion.section id="work" className="space-y-12 px-8 md:px-24 lg:px-60">
      <h2 className="text-white flex flex-col-reverse md:flex-row text-center md:text-left items-center w-full font-openSans font-semibold text-3xl md:text-4xl mt-6 leading-tight tracking-tighter after:mb-8 md:after:mb-0 after:w-1/3 md:after:ml-8 md:after:flex-grow after:h-1 after:bg-white">
        <span>Here are a few of my favorite projects.</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <WorkCard
            title={project.title}
            techTitle={project.techTitle}
            description={project.description}
            demoLink={project.demoLink}
            repoLink={project.repoLink}
            index={i}
            key={i}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Work;
