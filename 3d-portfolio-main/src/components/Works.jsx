import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import livelink from "../assets/liveLink.png";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  liveUrl,
  apk, // 👈 Add apk as a prop
}) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex gap-2 justify-end m-3 card-img_hover">
          {source_code_link && (
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          )}
          {liveUrl && (
            <div
              onClick={() => window.open(liveUrl, "_blank")}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={livelink}
                alt="live url"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px] h-[8rem] overflow-y-scroll">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>

      {/* 🔽 Add APK download button if apk exists */}
      {apk && (
        <div className="mt-4 text-center">
          <a
            href={apk}
            download
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 inline-block"
          >
            📱 Download APK
          </a>
        </div>
      )}
    </Tilt>
  );
};

const Works = () => {
  return (
    <>
      <p className={`${styles.sectionSubText}`}>My work</p>
      <h2
        className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}
      >
        Projects.
      </h2>

      <div className="w-full flex">
        <p
          variants={fadeIn("", "", 1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
