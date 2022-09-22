import { ICardPost } from 'blog-api/types';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { UNSPLASH_IMG_URL } from 'data';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

interface BlogPostCardProps {
  post: ICardPost;
}

export function BlogPostCard({
  post: {
    headerImgId,
    publishedAt,
    slug,
    title,
  },
}: BlogPostCardProps) {
  const [hovered, setIsHovered] = useState(false);

  const variants = {
    hovered: { opacity: 1, scale: [0, 1.5, 1] },
    unhovered: { opacity: 0, scale: [1, 0] },
  };

  return (
    <Link href={`blog/${slug}`}>
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className='mb-3.5 last:mb-0 sm:mb-0 group max-h-[390px] aspect-square'
      >
        <div className='relative'>
          <Image
            src={`${UNSPLASH_IMG_URL}/${headerImgId}`}
            alt='alt'
            width={350}
            height={390}
            layout='responsive'
            objectFit='cover'
            className='bg-bottom'
          />
          <div className='bg-gradient-to-b from-transparent to-black/30 absolute inset-0 flex items-center justify-center'>
            <div className='bottom-3 md:bottom-6 xl:bottom-8 absolute px-6 text-white'>
              <h4 className='lg:text-xl text-lg font-bold'>{title}</h4>
            </div>
            <p className='top-3 md:top-6 xl:top-8 absolute left-0 px-6 text-white'>
              {format(new Date(publishedAt), 'MMM dd, yyyy')}
            </p>
            <motion.div
              className='top-1/2 left-[50%] flex justify-center items-center h-[125px] w-[125px] rounded-full bg-white cursor-pointer'
              animate={hovered ? 'hovered' : 'unhovered'}
              variants={variants}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
              }}
              custom={hovered}
            >
              <span className='underlined'>Read Article</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
