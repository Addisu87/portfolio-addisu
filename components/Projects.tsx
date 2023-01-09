import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Link from 'next/link';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[16px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 top-12">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-34"
          >
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <motion.img
                src={urlFor(project?.image).url()}
                alt=""
                className="w-96 h-46 xl:w-122 xl:h-70"
              />
            </motion.div>

            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <div className="flex items-center space-x-2 justify-center">
                <Link href={project?.sourceCode}>
                  <button className="heroButton ">Source Code</button>
                </Link>
                <Link href={project?.linkToBuild}>
                  <button className="heroButton">Live Demo</button>
                </Link>
              </div>

              <h5 className="text-xl font-light text-center">
                Project {i + 1} of {projects.length} {''}
                <span className="underline decoration-[#F7AB0A]/50">
                  {project?.title}
                </span>
              </h5>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <motion.img
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                    className="w-10 h-10 rounded-full border-[1px]"
                  />
                ))}
              </div>

              <p className="text-light text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/30 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
