import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { FC, useState, useRef, useEffect } from "react";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";
import { useAppDispatch } from "../redux/reduxHooks";
import { setNavHeight } from "../redux/navHeight";
import { useMediaQuery } from "react-responsive";

const Nav: FC = () => {
  const [animationState, setAnimationState] = useState("notHovered");
  const navRef = useRef<HTMLElement>(null);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [hamburgerState, setHamburgerState] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (navRef.current) {
      if (typeof window !== "undefined") {
        document.documentElement.style.scrollPaddingTop = `${
          parseInt(window.getComputedStyle(navRef.current).height) + 40
        }px`;
        dispatch(
          setNavHeight(parseInt(window.getComputedStyle(navRef.current).height))
        );
      }
    }
  }, []);
  return (
    <LayoutGroup>
      <motion.nav
        className={`flex py-6 px-8 md:px-24 lg:px-60 justify-between items-center fixed w-full top-0 bg-bg-surface z-50 overflow-hidden ${
          isTabletOrMobile ? "flex-col" : "flex-row"
        }`}
        ref={navRef}
        layout
      >
        <motion.div
          className={
            isTabletOrMobile ? "flex justify-between items-center w-full" : ""
          }
        >
          <motion.div
            className="flex space-x-6 items-center"
            onHoverStart={() => {
              setAnimationState("hovered");
            }}
            onHoverEnd={() => {
              setAnimationState("notHovered");
            }}
            onTap={() => {
              setAnimationState("hovered");
              setTimeout(() => {
                setAnimationState("notHovered");
              }, 2000);
            }}
            layout
          >
            <motion.div className="border border-[#303436] rounded-full flex justify-center items-center overflow-hidden h-12 w-12">
              <AnimatePresence mode="wait">
                {animationState === "notHovered" && (
                  <motion.figure
                    animate={{ x: 0, scale: 1, rotate: 0 }}
                    initial={{ x: -100 }}
                    exit={{
                      scale: 15,
                      rotate: 270,
                      transition: {
                        ease: [0.07, -0.04, 1, 0.4],
                        duration: 0.8,
                      },
                    }}
                    transition={{ duration: 0.5, type: "spring" }}
                    key={animationState}
                  >
                    <BsPerson color="#C3C1BA" size={25} />
                  </motion.figure>
                )}
                {animationState === "hovered" && (
                  <motion.figure
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    initial={{ opacity: 0, y: 50, scale: 0.3 }}
                    exit={{ x: 100 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    key={animationState}
                  >
                    <img
                      src="/profile.png"
                      alt="profile"
                      className="max-h-full max-w-full object-cover"
                    />
                  </motion.figure>
                )}
              </AnimatePresence>
            </motion.div>
            <p
              className={`font-medium text-xl ${
                animationState === "hovered" ? "name-gradient" : "text-white"
              }`}
            >
              yagnik.dev
            </p>
          </motion.div>
          {isTabletOrMobile && (
            <motion.div
              layout
              onClick={() => setHamburgerState(!hamburgerState)}
            >
              <motion.div
                animate={{
                  rotate: hamburgerState ? 40 : 0,
                  transformOrigin: "top left",
                  marginBottom: hamburgerState ? "20px" : "10px",
                }}
                className="bg-white h-0.5 rounded-full w-9"
              ></motion.div>
              <motion.div
                animate={{
                  rotate: hamburgerState ? -40 : 0,
                  transformOrigin: "bottom left",
                  marginTop: hamburgerState ? "20px" : "10px",
                }}
                className="bg-white h-0.5 rounded-full w-9"
              ></motion.div>
            </motion.div>
          )}
        </motion.div>
        {!isTabletOrMobile && (
          <div className="text-white-secondary flex items-center space-x-16">
            <Link href="#work">Work</Link>
            <Link href="#techstack">Tech Stack</Link>
            <Link href="#contact">Contact</Link>
          </div>
        )}
        <AnimatePresence>
          {isTabletOrMobile && hamburgerState && (
            <motion.div
              className="text-white-secondary flex items-center flex-col text-xl space-y-4 mt-6"
              key={`${hamburgerState}`}
              layout
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <a onClick={() => setHamburgerState(false)} href="#work">
                Work
              </a>
              <a onClick={() => setHamburgerState(false)} href="#techstack">
                Tech Stack
              </a>
              <a onClick={() => setHamburgerState(false)} href="#contact">
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </LayoutGroup>
  );
};

export default Nav;
