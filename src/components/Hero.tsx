import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAppSelector } from "../redux/reduxHooks";

const Hero: FC = () => {
  const nabHeight = useAppSelector((state) => state.navHeight);
  return (
    <motion.div
      className={`py-12 px-8 md:px-24 flex flex-col items-center`}
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
      <motion.p
        className="md:w-1/2 mx-auto text-center mt-6 text-white-secondary"
        animate={{
          opacity: 1,
        }}
        initial={{ opacity: 0 }}
      >
        I’m an <span className="font-medium">11th-grade student</span> as a{" "}
        <span className="font-medium">self-taught web developer</span>. Since I
        am learning web development, I’m curious and passionate about it and
        love to learn new stuff. Looking for a helping community, which can help
        me grow further.
      </motion.p>
    </motion.div>
  );
};

export default Hero;
