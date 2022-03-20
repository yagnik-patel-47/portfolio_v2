import Head from "next/head";
import Hero from "../components/Hero";
import Work from "../components/Work";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import { FC, useEffect, useState } from "react";
import ScrollTop from "../components/ScrollTop";
import dynamic from "next/dynamic";
import { AnimateSharedLayout } from "framer-motion";

const DynamicNav = dynamic(() => import("../components/Nav"));

const Home: FC = () => {
  const [scrollTop, setScrollTop] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Yagnik Patel</title>
        <link rel="preload" as="image" href="/profile.png" sizes="100%" />
      </Head>
      <AnimateSharedLayout>
        {typeof window !== "undefined" && <DynamicNav />}
        <Hero />
        <Work />
        <TechStack />
        <Contact />
      </AnimateSharedLayout>
      {scrollTop && <ScrollTop />}
    </>
  );
};

export default Home;
