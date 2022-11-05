import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

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
    <div>
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}

export default Hero;
