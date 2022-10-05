import { FC, useState } from "react";
import Image from "next/future/image";
import { FiGithub } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";

interface Props {
  title: string;
  image: string;
  description: string;
  demoLink: string;
  repoLink: string;
  shadowColor: string;
  keywords: string[];
}

const WorkCard: FC<Props> = ({
  title,
  image,
  description,
  demoLink,
  repoLink,
  shadowColor,
  keywords,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="text-white flex flex-col space-y-2">
      <div
        className={`p-2 rounded-lg border-white-secondary/50 border cursor-pointer hover:-translate-y-2 transition`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open(demoLink, "_blank")}
        style={
          isHovered
            ? { boxShadow: `0 5px 10px ${shadowColor}` }
            : { boxShadow: `none` }
        }
      >
        <Image
          src={image}
          alt={title}
          width={1080}
          height={551}
          quality={100}
          priority
          style={{ width: "100%", height: "auto" }}
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
          >
            <FiGithub />
          </a>
          <a
            className="hover:text-blue-500"
            href={demoLink}
            target="_blank"
            rel="noreferrer"
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
