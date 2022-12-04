import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer mx-auto">
      <motion.img
        initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-full border-[1px] border-gray-500 object-cover w-16 h-16 md:w-22 md:h-22 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-400 ease-in-out group-hover:animate-bounce"
        src={urlFor(skill?.image).url()}
        alt=""
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-400 ease-in-out group-hover:bg-white w-16 h-16 md:w-22 md:h-22 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-light text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
