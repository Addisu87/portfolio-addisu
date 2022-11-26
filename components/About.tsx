import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/legacy/image';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.div
        initial={{
          x: -200,
          opacity: 0
        }}
        transition={{
          duration: 1.2
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-56 h-56 -mb-20 md:mb-0 flex-shrink-0 md:w-65 md:h-95 xl:w-[500px] xl:h-[600px] mt-[120px]"
      >
        <Image
          className="rounded-full object-cover md:rounded-lg"
          src={urlFor(pageInfo?.profilePic).url()}
          alt=""
          width={450}
          height={450}
        />
      </motion.div>

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl font-bold">
          Here is a little {''}
          <span className="underline decoration-[#F7AB0A]/50">
            background
          </span>{' '}
        </h4>
        <p className="text-2xl font-light">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
