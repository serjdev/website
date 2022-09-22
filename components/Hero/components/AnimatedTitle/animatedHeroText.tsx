import { motion, Variants } from 'framer-motion';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { AnimatedCharacters } from './animatedCharacters';
import { TagType } from './types';

const heroText: Array<{ tagName: TagType; text: string }> = [
  { tagName: 'h1', text: 'Front End Development' },
  {
    tagName: 'p',
    text: 'Hi I am Sergiu,',
  },
  {
    tagName: 'p',
    text: 'a web developer based in Italy!',
  },
];

export function AnimatedHeroText() {
  const variants: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <motion.div
      className='App'
      initial='hidden'
      animate='visible'
      variants={variants}
    >
      <div>
        {heroText.map((item, index) => <AnimatedCharacters {...item} key={uuid()} />)}
      </div>
    </motion.div>
  );
}
