import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import ProfilePic from '../assets/images/Profile.jpg';

type Props = {};

function Hero({}: Props) {
  const [text] = useTypewriter({
    words: [
      'I am a Full Stack Developer',
      'I am a React/Redux Developer',
      'I am an Enthusiastic Developer',
      'I am Ruby/Ruby on Rails Developer',
      'I am a Freelancer'
    ],
    loop: true,
    delaySpeed: 2000
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={ProfilePic}
        alt="Profile picture"
      />

      <div className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
        <h2>Software Engineer</h2>
      </div>

      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}

export default Hero;
