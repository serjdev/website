import React from 'react';
import { motion, Variants } from 'framer-motion';
import clsx from 'clsx';
import { v4 as uuid } from 'uuid';
import { TagType } from './types';

interface AnimatedTitleProps {
  tagName: TagType;
  text: string;
}

export function AnimatedCharacters({ tagName, text }: AnimatedTitleProps) {
  const itemVariants: Variants = {
    hidden: {
      color: '#000',
      transition: { duration: 0.85, ease: [0.455, 0.03, 0.515, 0.955] },
      y: '200%',
    },
    visible: {
      color: '#FFF',
      transition: { duration: 0.75, ease: [0.455, 0.03, 0.515, 0.955] },
      y: 0,
    },
  };

  const words = text.split(' ').map((item) => item.split(''));

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => word.push('\u00A0'));

  // Get the tag name from tagMap
  const Tag = tagName as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={clsx({
        'font-bold text-2xl lg:text-4xl mb-6': tagName === 'h1',
        'text-lg lg:text-2xl': tagName === 'p',
      })}
    >
      {words.map((_, index) => (
        <span key={uuid()}>
          {words[index].map((element, i) => (
            <span className='inline-block overflow-hidden' key={uuid()}>
              <motion.span className='inline-block' variants={itemVariants}>
                {element}
              </motion.span>
            </span>
              ))}
        </span>
        ))}
    </Tag>
  );
}
