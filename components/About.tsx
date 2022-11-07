import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProfilePic from '../assets/images/Profile.jpg';

type Props = {};

function About({}: Props) {
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
        <Image
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
          object-cover md:rounded-lg md:w-65 md:h-95 xl:w-[400px] xl:h-[500px] "
          src={ProfilePic}
          alt="ProfilePic"
        />
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
        <p className="text-base">
          I am currently enrolled at Microverse, a software development program
          that uses pair programming and real-world projects to teach software
          development. In this school, I code every day with other developers
          around the world and have learned the important skills of
          communication, work ethics, and teamwork. My experience as a teacher
          at a university for 7 years also taught me how to communicate and
          analyze things well. I apply this every day when I learn to code. In
          my two years of experience in tech, I’ve developed extensive knowledge
          in Front-end development: ReactJS | NextJS | Ruby on Rails Back-end
          development: NodeJS | Ruby on Rails | Python | Django Databases:
          PostgreSQL Mobile development: ReactNative Styling: Styled-components
          | CSS-in-JS | MaterialUI | Bootstrap | TailwindCSS Product management:
          UI design | UX Design Tools & Methods: Netlify | Vercel | Git | GitHub
          | Chrome DevTools | Firebase | Jest Professional: Remote
          pair-programming, Teamwork, Mentoring - I am a self-motivated person
          and I try to exceed my colleague’s expectations with high-quality
          work. - Being a fast learner, I quickly pick up programming knowledge
          related to my work. - My soft and technical experiences in this sector
          can bring benefits to your company to save you time and money. - Open
          for exploring exciting full-stack development opportunities in
          startups as well as companies with scale. Check out some of my work at
          https://github.com/Addisu87.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
