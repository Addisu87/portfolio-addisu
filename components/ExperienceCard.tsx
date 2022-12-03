import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.img
          className="w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
          src={urlFor(experience?.companyImage).url()}
          alt=""
        />
      </motion.div>

      <div className="px-2 md:px-10">
        <h4 className="text-2xl font-light">{experience?.jobTitle}</h4>
        <p className="font-semibold text-xl mt-1">{experience?.company}</p>
        <div className="flex items-center justify-center space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <motion.img
              key={technology._id}
              className="w-10 h-10 rounded-full"
              src={urlFor(technology.image).url()}
              alt=""
            />
          ))}
        </div>

        <p className="uppercase py-4 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} - {''}
          {experience.isCurrentlyWorkingHere
            ? 'Present'
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc list-inside space-y-4 ml-5 text-light max-h-24 max-w-24 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
