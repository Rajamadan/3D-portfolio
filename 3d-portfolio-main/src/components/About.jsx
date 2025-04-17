import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { madan } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>INTRODUCTION</p>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>
          Overview.
        </h2>
      </motion.div>

      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse gap-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hello! I'm Rajamadan, a passionate Developer and Designer specializing in Game Development, 3D Design, and Full-Stack Application Development.
          I’m skilled in both frontend and backend technologies, with hands-on experience in tools like Flutter, Dart, Firebase, and a wide range of APIs for building scalable cross-platform applications.
          <br /><br />
          I bring creative projects to life using Unity, Blender, and C#, delivering immersive gameplay and visually engaging 3D environments. On the design side, I work with Figma to craft clean, user-friendly interfaces.
          <br /><br />
          <strong>My tech toolkit includes:</strong><br />
          <strong>Frontend:</strong> HTML, CSS, JavaScript, Tailwind, XML, JSX<br />
          <strong>Backend:</strong> Firebase, APIs, and integration services<br />
          <strong>Mobile:</strong> Flutter & Dart<br />
          <strong>Game/3D:</strong> Unity, C#, Blender<br />
          <strong>UI/UX Tools:</strong> Figma, Adobe XD
          <br /><br />
          I'm driven by creativity, technical problem-solving, and a passion for building experiences that users love. Feel free to explore my work or get in touch to collaborate:{" "}
          <a
            href="mailto:rajamadan2005@gmail.com"
            className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
          >
            rajamadan2005@gmail.com
          </a>
          . I'm always open to new opportunities and collaborations!
        </motion.p>

        <Tilt className="w-[320px] h-[420px] max-[1000px]:my-8">
          <motion.div
            variants={fadeIn("", "", 0.5, 1)}
            className="green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] h-[420px] w-[320px] flex justify-center items-center overflow-hidden"
            >
              <img
                src={madan}
                alt="Rajamadan"
                className="h-full w-full object-cover rounded-[20px]"
              />
            </div>
          </motion.div>
        </Tilt>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
