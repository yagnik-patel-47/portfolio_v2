import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="md:py-12 py-8 flex justify-center items-center bg-bg-surface w-full">
      <p className="text-white-secondary font-medium text-lg md:text-2xl">
        © 2021 Yagnik Patel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
