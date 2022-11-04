import projects from "../workData";
import WorkCard from "./WorkCard";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.section
      id="work"
      className="space-y-12 px-8 md:px-20 lg:px-40 xl:px-60 2xl:px-96"
    >
      <h2 className="text-white flex flex-col-reverse md:flex-row text-center md:text-left items-center w-full font-openSans font-semibold text-3xl md:text-4xl mt-6 leading-tight tracking-tighter after:mb-8 md:after:mb-0 after:w-1/3 md:after:ml-8 md:after:flex-grow after:h-1 after:bg-neutral-200">
        <span>Here are a few of my favorite projects.</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <WorkCard
            title={project.title}
            image={project.image}
            description={project.description}
            demoLink={project.demoLink}
            repoLink={project.repoLink}
            keywords={project.keywords}
            key={i}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Work;
