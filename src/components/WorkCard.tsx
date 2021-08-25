import { FC, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";

interface Props {
  title: string;
  techTitle: string;
  description: string;
  demoLink: string;
  repoLink: string;
  index: number;
}

const WorkCard: FC<Props> = ({
  title,
  techTitle,
  description,
  demoLink,
  repoLink,
  index,
}: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      animate={controls}
      initial="hidden"
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: isTabletOrMobile
          ? { x: index % 2 === 0 ? -30 : 30, opacity: 0 }
          : { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
      }}
      transition={{
        duration: 0.4,
        delay: index + 1 !== 1 ? (index + 1) / 10 : 0,
        type: "spring",
        stiffness: 200,
      }}
      className="bg-bg-surface text-white px-10 py-8 flex flex-col space-y-2"
      ref={ref}
    >
      <p className="text-white-secondary uppercase font-medium tracking-widest text-sm">
        {techTitle}
      </p>
      <h3 className="font-medium text-xl tracking-wider">{title}</h3>
      <p className="text-white-secondary">{description}</p>
      <div className="flex items-center space-x-2 font-medium text-xs !mt-3">
        <a
          href={demoLink}
          target="_blank"
          rel="noreferrer"
          className="uppercase py-2 px-4 rounded-md"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(255, 255, 255, 0.15), rgba(196,196,196, 0.15))",
          }}
        >
          Demo
        </a>
        <a
          href={repoLink}
          rel="noreferrer"
          target="_blank"
          className="uppercase py-2 px-4"
        >
          Repository
        </a>
      </div>
    </motion.div>
  );
};

export default WorkCard;
