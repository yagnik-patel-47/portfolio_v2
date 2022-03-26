import { FC } from "react";
import { RiComputerLine } from "react-icons/ri";
import { FiDatabase } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

const TechStack: FC = () => {
  return (
    <section id="techstack" className="space-y-12 px-8 md:px-24 mt-16">
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-6 leading-tight tracking-tighter">
        My Tech Stack
      </h1>
      <div className="text-white grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        <div className="bg-bg-surface border-t-4 border-blue-500 rounded-md py-12 px-16 flex flex-col space-y-6 items-start md:col-span-2 lg:col-span-1">
          <RiComputerLine color="#C3C1BA" size={100} className="self-center" />
          <h1 className="font-openSans font-bold text-3xl self-center">
            Frontend
          </h1>
          <ul className="list-disc text-white-secondary">
            <li>HTML, CSS, JavaScript</li>
            <li>React & NextJS</li>
            <li>Typescript</li>
            <li>Firebase & Redux(toolkit)</li>
            <li>Material UI, Tailwind CSS, Bootstrap, Styled Components</li>
          </ul>
        </div>
        <div className="bg-bg-surface border-t-4 border-blue-500 rounded-md py-12 px-16 flex flex-col space-y-6 items-start">
          <FiDatabase color="#C3C1BA" size={100} className="self-center" />
          <h1 className="font-openSans font-bold text-3xl self-center">
            Backend
          </h1>
          <ul className="list-disc text-white-secondary">
            <li>NodeJS</li>
            <li>Express</li>
            <li>Socket.io</li>
            <li>MongoDB, PostgreSQL (learning)</li>
            <li>Mongoose, TypeORM (learning)</li>
            <li>GraphQL (Apollo)</li>
          </ul>
        </div>
        <div className="bg-bg-surface border-t-4 border-blue-500 rounded-md py-12 px-16 flex flex-col space-y-6 items-start">
          <AiOutlineHeart color="#C3C1BA" size={100} className="self-center" />
          <h1 className="font-openSans font-bold text-3xl self-center">
            Other
          </h1>
          <ul className="list-disc text-white-secondary">
            <li>UI Design</li>
            <li>Flutter</li>
            <li>Java (learning)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
