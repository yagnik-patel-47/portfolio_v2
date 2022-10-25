import { FC } from "react";

const TechStack: FC = () => {
  return (
    <section
      id="techstack"
      className="space-y-12 px-8 md:px-24 lg:px-60 mt-16 md:mt-32"
    >
      <h2 className="text-white flex flex-col-reverse md:flex-row text-center md:text-left items-center w-full font-openSans font-semibold text-3xl md:text-4xl mt-6 leading-tight tracking-tighter after:mb-8 md:after:mb-0 after:w-1/3 md:after:ml-8 md:after:flex-grow after:h-1 after:bg-neutral-200">
        <span>Here is my toolbelt for success.</span>
      </h2>
      <div className="text-white">
        <h4 className="text-2xl font-medium text-center md:text-left">
          Frontend
        </h4>
        <div className="grid gap-x-5 grid-cols-[repeat(auto-fit,_minmax(90px,_1fr))] mt-4 py-4 justify-items-center items-center md:grid-cols-[repeat(auto-fit,_minmax(90px,_max-content))]">
          <div className="flex flex-col items-center space-y-4 m-4 md:mx-0">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="html logo"
              className="w-12 lg:w-16"
            />
            <p>HTML</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="css logo"
              className="w-12 lg:w-16"
            />
            <p>CSS</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="javascript logo"
              className="w-12 lg:w-16"
            />
            <p>Javascript</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react logo"
              className="w-12 lg:w-16"
            />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
              alt="nextjs logo"
              className="invert filter w-12 lg:w-16"
            />
            <p>NextJS</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="typescript logo"
              className="w-12 lg:w-16"
            />
            <p>Typescript</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="redux logo"
              className="w-12 lg:w-16"
            />
            <p>Redux</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              alt="mui logo"
              className="w-12 lg:w-16"
            />
            <p>MUI</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              className="w-12 lg:w-16"
            />
            <p>Tailwind</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="bootstrap logo"
              className="w-12 lg:w-16"
            />
            <p>Bootstrap</p>
          </div>
        </div>
        <h4 className="text-2xl font-medium mt-4 text-center md:text-left">
          Backend
        </h4>
        <div className="grid gap-x-5 grid-cols-[repeat(auto-fit,_minmax(90px,_1fr))] mt-4 py-4 justify-items-center items-center md:grid-cols-[repeat(auto-fit,_minmax(90px,_max-content))]">
          <div className="flex flex-col items-center space-y-4 m-4 md:mx-0">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="nodejs logo"
              className="w-12 lg:w-16"
            />
            <p>NodeJS</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="express logo"
              className="w-12 lg:w-16 filter invert"
            />
            <p>Express</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
              alt="socket.io logo"
              className="w-12 lg:w-16 filter invert"
            />
            <p>Socket.io</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="mongodb logo"
              className="w-12 lg:w-16"
            />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              alt="postgresql logo"
              className="w-12 lg:w-16"
            />
            <p>PostgreSQL</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
              alt="graphql logo"
              className="w-12 lg:w-16"
            />
            <p>GraphQL</p>
          </div>
        </div>
        <h4 className="text-2xl font-medium mt-4 text-center md:text-left">
          Tools
        </h4>
        <div className="grid gap-x-5 grid-cols-[repeat(auto-fit,_minmax(90px,_1fr))] mt-4 py-4 justify-items-center items-center md:grid-cols-[repeat(auto-fit,_minmax(90px,_max-content))]">
          <div className="flex flex-col items-center space-y-4 m-4 md:mx-0">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
              alt="figma logo"
              className="w-12 lg:w-16"
            />
            <p>Figma</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              alt="vscode logo"
              className="w-12 lg:w-16"
            />
            <p>VS Code</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="git logo"
              className="w-12 lg:w-16"
            />
            <p>Git</p>
          </div>
          <div className="flex flex-col items-center space-y-4 m-4">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              alt="firebase logo"
              className="w-12 lg:w-16"
            />
            <p>Firebase</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
