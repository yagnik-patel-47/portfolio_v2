import Image from "next/image";
import { motion } from "framer-motion";
import { useAppSelector } from "../redux/reduxHooks";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const nabHeight = useAppSelector((state) => state.navHeight);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <motion.div
      className={`py-24 px-8 md:px-24 lg:px-40 xl:px-60 2xl:px-96 flex flex-col items-center`}
      style={{ marginTop: `${nabHeight}px` }}
    >
      <div className="rounded-full overflow-hidden">
        <Image
          src="/profile.webp"
          alt="Profile"
          width={150}
          height={150}
          priority={true}
          quality={100}
        />
      </div>
      <h1 className="text-white text-3xl font-medium mt-6">
        Hi 👋🏻, I'm Yagnik.
      </h1>
      <p className="text-gray-300 text-md mt-2">
        Self-taught Frontend Developer
      </p>
      <motion.h1
        className="font-openSans text-center text-3xl sm:text-4xl md:text-6xl font-bold mt-6 leading-tight tracking-tighter gradient-text"
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        initial={{ opacity: 0 }}
      >
        Building digital
        {!isMobile && <br />} websites, web apps, and
        {!isMobile && <br />} experience.
      </motion.h1>
      <motion.a
        href="#work"
        className="inline-block px-6 py-3 mt-10 cursor-pointer bg-bg-surface rounded-xl md:text-lg text-md no-tap-highlight"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        More about me
      </motion.a>
    </motion.div>
  );
};

export default Hero;
