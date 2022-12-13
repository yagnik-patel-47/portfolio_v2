import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";

interface Props {
  title: string;
  image: string;
  description: string;
  demoLink: string;
  repoLink: string;
  keywords: string[];
}

const WorkCard = ({
  title,
  image,
  description,
  demoLink,
  repoLink,
  keywords,
}: Props) => {
  return (
    <div className="text-white flex flex-col space-y-2">
      <div
        className="p-2 rounded-lg border-white-secondary/50 border cursor-pointer hover:-translate-y-2 transition hover:scale-[1.01]"
        onClick={() => window.open(demoLink, "_blank")}
      >
        <Image
          src={image}
          alt={title}
          width={1080}
          height={551}
          quality={100}
          priority={image === "/images/lego.webp"}
          sizes="(max-width: 768px) 90vw,
              (max-width: 1200px) 40vw,
              30vw"
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "1000/750",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex justify-between items-center !mt-4">
        <h3 className="font-medium text-xl tracking-wider">{title}</h3>
        <div className="flex space-x-2 items-center">
          <a
            className="hover:text-blue-500"
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            aria-label="github repo"
          >
            <FiGithub />
          </a>
          <a
            className="hover:text-blue-500"
            href={demoLink}
            target="_blank"
            rel="noreferrer"
            aria-label="demo"
          >
            <RiExternalLinkLine />
          </a>
        </div>
      </div>
      <p className="text-white-secondary">{description}</p>
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs md:text-sm bg-[#232628] rounded-lg"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WorkCard;
