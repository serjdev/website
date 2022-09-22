import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SocialLinks } from './components/SocialLinks';
import { AnimatedHeroText } from './components/AnimatedTitle/animatedHeroText';

export function Hero() {
  return (
    <section className='md:pl-32 h-full text-white'>
      <div>
        <div className='md:w-1/2 sm:pt-20 pt-[30vh] flex flex-col'>
          <AnimatedHeroText />
          <Link href='/blog'>
            <motion.a
              className='max-w-fit bg-accent px-4 py-2 mt-12 cursor-pointer'
              whileHover={{ scale: 1.1 }}
            >
              Read about Frond End Development
            </motion.a>
          </Link>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
