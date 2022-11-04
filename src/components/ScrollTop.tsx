import { HiArrowNarrowUp } from "react-icons/hi";

const ScrollTop = () => {
  return (
    <a
      className="fixed right-8 bottom-8 md:right-20 md:bottom-16 p-3 md:p-4 rounded-full border-blue-500 border glass_bg no-tap-highlight"
      href="#"
    >
      <HiArrowNarrowUp size={30} color="#C3C1BA" />
    </a>
  );
};

export default ScrollTop;
