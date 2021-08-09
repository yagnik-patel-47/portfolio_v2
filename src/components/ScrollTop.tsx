import { FC } from "react";
import { HiArrowNarrowUp } from "react-icons/hi";

const ScrollTop: FC = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      onClick={scrollToTop}
      className="fixed right-12 bottom-12 md:right-20 md:bottom-20 p-4 bg-bg-surface rounded-full border-blue-500 border"
    >
      <HiArrowNarrowUp size={35} color="#C3C1BA" />
    </div>
  );
};

export default ScrollTop;
