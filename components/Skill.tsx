import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -200 : 200,
        opacity: 0
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="group relative flex cursor-pointer"
    >
      <Image
        className="rounded-full border border-gray-500 object-cover  md:w-20 md:h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={urlFor(skill?.image).url()}
        alt=""
        width={40}
        height={40}
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-10 w-10 md:w-20 md:h-20 xl:w-24 xl:h-24 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-2xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
