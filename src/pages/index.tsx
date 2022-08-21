import Head from "next/head";
import Work from "../components/Work";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import { FC, useEffect, useState } from "react";
import ScrollTop from "../components/ScrollTop";
import dynamic from "next/dynamic";

const DynamicNav = dynamic(() => import("../components/Nav"), { ssr: false });
const DynamicHero = dynamic(() => import("../components/Hero"), { ssr: false });

const Home: FC = () => {
  const [scrollTop, setScrollTop] = useState(false);
  const [siteMounted, setSiteMounted] = useState(false);

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
      setSiteMounted(true);
      window.addEventListener("scroll", toggleVisibility);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Yagnik Patel</title>
        <link rel="preload" as="image" href="/profile.png" sizes="100%" />
      </Head>
      {!siteMounted && (
        <div className="flex justify-center items-center absolute left-0 top-0 h-full w-full bg-gray-900">
          <img
            src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/main/preview/bars-scale-white-36.svg"
            alt="spinner"
            className="w-24"
          />
        </div>
      )}
      <DynamicNav />
      <DynamicHero />
      <Work />
      <TechStack />
      <Contact />
      {scrollTop && <ScrollTop />}
    </>
  );
};

export default Home;
