import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
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
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
        object-cover md:rounded-lg md:w-65 md:h-95 xl:w-[400px] xl:h-[500px]"
      >
        {pageInfo?.ProfilePic && (
          <Image
            className="-mb-20 md:mb-0 flex-shrink-0 
             rounded-full
          object-cover md:rounded-lg md:w-65 md:h-95 xl:w-[400px] xl:h-[500px] "
            src={urlFor(pageInfo?.ProfilePic).url()}
            alt=""
            width={56}
            height={56}
          />
        )}
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h5 className="text-4xl font-semibold">
          <span className="underline decoration-[#F7AB0A]/50">
            Software Engineer | {''}
          </span>
          <span className="underline decoration-[#F7AB0A]/50">
            {' '}
            Full Stack Web Developer |{' '}
          </span>{' '}
          <span className="underline decoration-[#F7AB0A]/50">Freelancer</span>
        </h5>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
