import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAppSelector } from "../redux/reduxHooks";

const Hero: FC = () => {
  const nabHeight = useAppSelector((state) => state.navHeight);
  return (
    <motion.div
      className={`py-24 px-8 md:px-24 lg:px-60 flex flex-col items-center`}
      style={{ marginTop: `${nabHeight}px` }}
    >
      <div className="rounded-full overflow-hidden">
        <Image
          src="/profile.png"
          alt="Profile"
          width={150}
          height={150}
          priority={true}
          quality={100}
        />
      </div>
      <h1 className="text-white text-2xl font-openSans font-bold mt-6">
        Hi 👋🏻, I'm Yagnik.
      </h1>
      <motion.h1
        className="font-openSans text-center text-3xl md:text-6xl font-bold mt-6 leading-tight tracking-tighter gradient-text"
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
        initial={{ opacity: 0 }}
      >
        Building digital
        <br /> websites, web apps, and
        <br /> experience.
      </motion.h1>
    </motion.div>
  );
};

export default Hero;
