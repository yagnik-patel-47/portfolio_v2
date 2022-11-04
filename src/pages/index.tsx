import Head from "next/head";
import Work from "../components/Work";
import TechStack from "../components/TechStack";
import Contact from "../components/Contact";
import { useEffect, useState } from "react";
import ScrollTop from "../components/ScrollTop";
import dynamic from "next/dynamic";
import Image from "next/image";

const DynamicComponents = dynamic(() => import("../components/DynamicComps"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center absolute left-0 top-0 h-full w-full bg-gray-900 z-[51] overflow-hidden">
      <Image
        src="https://raw.githubusercontent.com/n3r4zzurr0/svg-spinners/main/preview/bars-scale-white-36.svg"
        alt="spinner"
        width={96}
        height={96}
      />
    </div>
  ),
});

const Home = () => {
  const [scrollTop, setScrollTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset > 300 ? setScrollTop(true) : setScrollTop(false)
    );
  }, []);

  return (
    <>
      <Head>
        <title>Yagnik Patel</title>
        <link rel="preload" as="image" href="/profile.webp" sizes="100%" />
      </Head>
      <DynamicComponents />
      <Work />
      <TechStack />
      <Contact />
      {scrollTop && <ScrollTop />}
    </>
  );
};

export default Home;
